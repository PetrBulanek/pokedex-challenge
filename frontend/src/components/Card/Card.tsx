import { Pokemon } from '@/app/lib/gql/graphql';
import { FavoriteIcon } from '@/components/icons/Favorite';
import { FavoriteOutlineIcon } from '@/components/icons/FavoriteOutline';
import { CardsView } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styles from './Card.module.scss';

interface CardProps extends Pick<Pokemon, 'image' | 'name' | 'types' | 'isFavorite'> {
	view?: CardsView;
	onFavoriteClick?: MouseEventHandler;
}

const Card = ({ view = 'grid', image, name, types, isFavorite, onFavoriteClick }: CardProps) => {
	return (
		<article className={clsx([styles.card, styles[view]])}>
			<figure className={styles.image}>
				<span>
					<Image src={image} fill alt={name} />
				</span>
			</figure>

			<div className={styles.body}>
				<div className={styles.content}>
					<h3 className={styles.name}>{name}</h3>

					<p className={styles.types}>{types.join(', ')}</p>
				</div>

				<button
					type="button"
					onClick={onFavoriteClick}
					aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
					className={styles.favorite}
				>
					{isFavorite ? <FavoriteIcon size={20} /> : <FavoriteOutlineIcon size={20} />}
				</button>
			</div>
		</article>
	);
};

export { Card };
