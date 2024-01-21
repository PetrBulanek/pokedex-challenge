import { favoritePokemonMutation, unFavoritePokemonMutation } from '@/lib/graphql/mutation';
import { PokemonCard } from '@/types';
import { useMutation } from '@apollo/client';
import { PropsWithChildren } from 'react';
import toast from 'react-hot-toast';
import { FavoriteIcon } from '../icons/Favorite';
import { FavoriteOutlineIcon } from '../icons/FavoriteOutline';
import { IconProps } from '../icons/Icon';
import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = PropsWithChildren<Pick<PokemonCard, 'id' | 'isFavorite' | 'name'>> & {
	size?: 'sm' | 'lg';
};

const FavoriteButton = ({ id, isFavorite, name, size = 'sm' }: FavoriteButtonProps) => {
	const [favoritePokemon] = useMutation(favoritePokemonMutation, {
		variables: { id },
		onCompleted: () => {
			toast.success(`${name} added to favorites.`, {
				icon: <FavoriteIcon size={20} className={styles.toastIcon} />,
			});
		},
	});
	const [unFavoritePokemon] = useMutation(unFavoritePokemonMutation, {
		variables: { id },
		onCompleted: () => {
			toast.success(`${name} removed from favorites.`, {
				icon: <FavoriteOutlineIcon size={20} className={styles.toastIcon} />,
			});
		},
	});

	const Icon = isFavorite ? FavoriteIcon : FavoriteOutlineIcon;

	return (
		<button
			type="button"
			onClick={() => (isFavorite ? unFavoritePokemon() : favoritePokemon())}
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
