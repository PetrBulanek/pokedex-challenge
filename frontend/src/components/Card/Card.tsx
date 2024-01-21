import { CardView, PokemonCard } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import styles from './Card.module.scss';

type CardProps = PokemonCard & {
	view?: CardView;
};

const Card = ({ view = 'grid', id, image, name, types, isFavorite }: CardProps) => {
	return (
		<article className={clsx([styles.card, styles[view]])}>
			<figure className={styles.image}>
				<span>
					<Image src={image} fill alt={name} />
				</span>
			</figure>

			<div className={styles.body}>
				<div className={styles.content}>
					<h3 className={styles.name}>
						<Link href={`/${name}`}>{name}</Link>
					</h3>

					{types && <p className={styles.types}>{types.join(', ')}</p>}
				</div>

				<FavoriteButton id={id} isFavorite={isFavorite} name={name} />
			</div>
		</article>
	);
};

export { Card };
