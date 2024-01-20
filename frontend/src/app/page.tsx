'use client';

import { Card } from '@/components/Card/Card';
import { CardsList } from '@/components/CardsList/CardsList';
import { Container } from '@/components/Container/Container';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';
import { SEARCH_THRESHOLD } from '@/constants';
import { CardView, TabView } from '@/types';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import { getPokemonsQuery } from '../lib/graphql/query';
import styles from './page.module.scss';

export default function Home() {
	const [activeTab, setActiveTab] = useSessionStorage<TabView>('tabView', 'all');
	const [cardView, setCardView] = useSessionStorage<CardView>('cardView', 'grid');
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedType, setSelectedType] = useState<string | null | undefined>(null);

	const { loading, error, data, refetch } = useQuery(getPokemonsQuery);

	if (error) {
		return <>Error</>;
	}

	const pokemons = data?.pokemons.edges
		.filter(({ name }) =>
			searchTerm && searchTerm.length >= SEARCH_THRESHOLD ? name.match(new RegExp(searchTerm, 'i')) : true
		)
		.filter(({ isFavorite }) => (activeTab === 'favorite' ? isFavorite : true))
		.filter(({ types }) => (selectedType ? types.includes(selectedType) : true));

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Container>
					<FiltersPanel
						activeTab={activeTab}
						onTabChange={(activeTab) => setActiveTab(activeTab)}
						onCardViewChange={(cardView) => setCardView(cardView)}
						onSearchChange={(term) => setSearchTerm(term)}
						onTypeChange={(type) => setSelectedType(type)}
					/>
				</Container>
			</header>

			<main className={styles.body}>
				<Container className={styles.container}>
					{loading ? (
						<p style={{ margin: 'auto' }}>Loading&hellip;</p>
					) : pokemons?.length === 0 ? (
						<p style={{ margin: 'auto' }}>There&apos;s nothing here.</p>
					) : (
						<CardsList view={cardView}>
							{pokemons?.map(({ ...props }) => (
								<Card key={props.id} {...props} view={cardView} refetch={refetch} />
							))}
						</CardsList>
					)}
				</Container>
			</main>
		</div>
	);
}
