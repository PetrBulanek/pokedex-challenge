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

export const getPokemonTypesQuery = gql(`
	query PokemonTypes {
		pokemonTypes
	}
`);

export const getPokemonByNameQuery = gql(`
	query PokemonByName($name: String!) {
		pokemonByName(name: $name) {
			id
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			types
			maxCP
			evolutions {
				id
				image
				name
				isFavorite
			}
			maxHP
			image
			sound
			isFavorite
		}
	}
`);