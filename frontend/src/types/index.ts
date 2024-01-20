import { PokemonByNameQuery, PokemonsQuery } from '@/lib/gql/graphql';

export type TabView = 'all' | 'favorite';

export type CardView = 'grid' | 'list';

export type Pokemon = PokemonsQuery['pokemons']['edges'][number];

export type PokemonCard = Omit<Pokemon, 'types'> & Partial<Pick<Pokemon, 'types'>>;

export type PokemonDetailCard = PokemonByNameQuery['pokemonByName'];
