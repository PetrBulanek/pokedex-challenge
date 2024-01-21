'use client';

import { Container } from '@/components/Container/Container';
import { DetailCard } from '@/components/DetailCard/DetailCard';
import { Loading } from '@/components/Loading/Loading';
import { getPokemonByNameQuery } from '@/lib/graphql/query';
import { useQuery } from '@apollo/client';
import styles from '../page.module.scss';

export default function Detail({ params }: { params: { name: string } }) {
	const { loading, error, data } = useQuery(getPokemonByNameQuery, { variables: { name: params.name } });

	if (error) {
		return <>Error</>;
	}

	const pokemonData = data?.pokemonByName;

	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<Container className={styles.container}>
					{loading ? <Loading /> : pokemonData ? <DetailCard {...pokemonData} /> : null}
				</Container>
			</main>
		</div>
	);
}
