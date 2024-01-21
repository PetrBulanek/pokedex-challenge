'use client';
import { DetailCard } from '@/components/DetailCard/DetailCard';
import { Loading } from '@/components/Loading/Loading';
import { getPokemonByNameQuery } from '@/lib/graphql/query';
import { useQuery } from '@apollo/client';
import { Modal } from '@carbon/react';
import { useRouter } from 'next/navigation';

export default function Detail({ params }: { params: { name: string } }) {
	const { loading, error, data } = useQuery(getPokemonByNameQuery, { variables: { name: params.name } });
	const router = useRouter();

	if (error) {
		return <>Error</>;
	}

	const pokemonData = data?.pokemonByName;

	return (
		<Modal size="md" modalHeading={params.name} open passiveModal onRequestClose={() => router.back()}>
			{loading ? <Loading /> : pokemonData ? <DetailCard {...pokemonData} /> : null}
		</Modal>
	);
}
