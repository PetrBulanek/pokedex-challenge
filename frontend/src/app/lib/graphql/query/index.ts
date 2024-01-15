import { gql } from '../../gql';

export const getPokemonsQuery = gql(`
	query Pokemons {
		pokemons(query: { limit: -1 }) {
			edges {
				id
				image
				name
				types
				isFavorite
			}
		}
	}
`);

export const getPokemonTypes = gql(`
	query PokemonTypes {
		pokemonTypes
	}
`);
