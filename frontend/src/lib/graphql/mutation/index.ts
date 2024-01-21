import { gql } from '../../gql';

export const favoritePokemonMutation = gql(`
	mutation FavoritePokemon($id: ID!) {
		favoritePokemon(id: $id) {
			id
			isFavorite
		}
	}
`);

export const unFavoritePokemonMutation = gql(`
	mutation UnFavoritePokemon($id: ID!) {
		unFavoritePokemon(id: $id) {
			id
			isFavorite
		}
	}
`);
