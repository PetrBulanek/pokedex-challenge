import { favoritePokemonMutation, unFavoritePokemonMutation } from '@/lib/graphql/mutation';
import { PokemonCard } from '@/types';
import { useMutation } from '@apollo/client';
import { PropsWithChildren, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FavoriteIcon } from '../icons/Favorite';
import { FavoriteOutlineIcon } from '../icons/FavoriteOutline';
import { IconProps } from '../icons/Icon';
import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = PropsWithChildren<Pick<PokemonCard, 'id' | 'isFavorite' | 'name'>> & {
	size?: 'sm' | 'lg';
	refetch: () => void;
};

const FavoriteButton = ({ id, isFavorite, name = 'test', size = 'sm', refetch }: FavoriteButtonProps) => {
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

				if (isFavorite) {
					unFavoritePokemon(data);

					toast.success(`${name} removed from favorites.`, {
						icon: <FavoriteOutlineIcon size={20} className={styles.toastIcon} />,
					});
				} else {
					favoritePokemon(data);

					toast.success(`${name} added to favorites.`, {
						icon: <FavoriteIcon size={20} className={styles.toastIcon} />,
					});
				}
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
