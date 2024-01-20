import { favoritePokemonMutation, unFavoritePokemonMutation } from '@/lib/graphql/mutation';
import { PokemonCard } from '@/types';
import { useMutation } from '@apollo/client';
import { PropsWithChildren, useEffect } from 'react';
import { FavoriteIcon } from '../icons/Favorite';
import { FavoriteOutlineIcon } from '../icons/FavoriteOutline';
import { IconProps } from '../icons/Icon';
import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = PropsWithChildren<Pick<PokemonCard, 'id' | 'isFavorite'>> & {
	size?: 'sm' | 'lg';
	refetch: () => void;
};

const FavoriteButton = ({ id, isFavorite, size = 'sm', refetch }: FavoriteButtonProps) => {
	const [favoritePokemon, { data: dataFavorite }] = useMutation(favoritePokemonMutation);
	const [unFavoritePokemon, { data: dataUnFavorite }] = useMutation(unFavoritePokemonMutation);

	useEffect(() => {
		if (dataFavorite || dataUnFavorite) {
			refetch();
		}
	}, [dataFavorite, dataUnFavorite, refetch]);

	const Icon = isFavorite ? FavoriteIcon : FavoriteOutlineIcon;

	return (
		<button
			type="button"
			onClick={() => {
				const data = { variables: { id } };

				isFavorite ? unFavoritePokemon(data) : favoritePokemon(data);
			}}
			aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			className={styles.favoriteButton}
		>
			{
				<Icon
					size={
						{
							sm: 20,
							lg: 32,
						}[size] as IconProps['size']
					}
				/>
			}
		</button>
	);
};

export { FavoriteButton };
