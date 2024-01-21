'use client';

import { Card } from '@/components/Card/Card';
import { CardsList } from '@/components/CardsList/CardsList';
import { Container } from '@/components/Container/Container';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';
import { Loading } from '@/components/Loading/Loading';
import { CardView, TabView } from '@/types';
import { useQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useSessionStorage } from 'usehooks-ts';
import { getPokemonsQuery } from '../lib/graphql/query';
import styles from './page.module.scss';

export default function Home() {
	const [activeTab, setActiveTab] = useState<TabView>('all');
	const [cardView, setCardView] = useSessionStorage<CardView>('cardView', 'grid');
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedType, setSelectedType] = useState<string | null | undefined>(null);

	const { loading, error, data, refetch, fetchMore } = useQuery(getPokemonsQuery, {
		notifyOnNetworkStatusChange: true,
		variables: {
			limit: 20,
		},
	});

	const pokemons =
		data?.pokemons.edges.filter((pokemon) => (activeTab === 'favorite' ? pokemon.isFavorite : true)) || [];
	const hasNextPage = pokemons.length && data?.pokemons.count ? pokemons.length < data?.pokemons.count : true;

	useEffect(() => {
		refetch({
			filter: {
				type: selectedType,
				isFavorite: activeTab === 'favorite',
			},
		});
	}, [refetch, activeTab, selectedType]);

	useEffect(() => {
		refetch({
			search: searchTerm,
		});
	}, [refetch, searchTerm]);

	const [sentryRef] = useInfiniteScroll({
		loading,
		hasNextPage,
		onLoadMore: () => {
			fetchMore({
				variables: {
					offset: pokemons.length,
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if (!fetchMoreResult) {
						return prev;
					}

					return Object.assign({}, prev, {
						pokemons: {
							...fetchMoreResult.pokemons,
							edges: [...prev.pokemons.edges, ...fetchMoreResult.pokemons.edges],
						},
					});
				},
			});
		},
	});

	if (error) {
		return <>Error</>;
	}

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Container>
					<FiltersPanel
						activeTab={activeTab}
						onTabChange={(activeTab) => setActiveTab(activeTab)}
						onCardViewChange={(cardView) => setCardView(cardView)}
						onSearchChange={debounce((search) => setSearchTerm(search), 100)}
						onTypeChange={(type) => setSelectedType(type)}
					/>
				</Container>
			</header>

			<main className={styles.body}>
				<Container className={styles.container}>
					{loading && !pokemons.length ? (
						<Loading />
					) : pokemons.length === 0 ? (
						<p style={{ margin: 'auto' }}>There&apos;s nothing here.</p>
					) : (
						<CardsList view={cardView}>
							{pokemons.map(({ ...props }) => (
								<Card key={props.id} {...props} view={cardView} />
							))}
						</CardsList>
					)}

					{(loading || hasNextPage) && pokemons.length > 0 && <div ref={sentryRef} />}
				</Container>
			</main>
		</div>
	);
}
