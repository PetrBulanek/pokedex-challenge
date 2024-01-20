import { PokemonDetailCard } from '@/types';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { CardsList } from '../CardsList/CardsList';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { PlaySoundButton } from '../PlaySoundButton/PlaySoundButton';
import { VitalSigns } from '../VitalSigns/VitalSigns';
import styles from './DetailCard.module.scss';

type DetailCardProps = PokemonDetailCard & {
	refetch: () => void;
};

const DetailCard = ({
	id,
	image,
	name,
	types,
	isFavorite,
	maxCP,
	maxHP,
	height,
	weight,
	sound,
	evolutions,
	refetch,
}: DetailCardProps) => {
	return (
		<>
			<article className={styles.detailCard}>
				<div className={styles.header}>
					<figure className={styles.image}>
						<span>
							<Image src={image} fill alt={name} />
						</span>
					</figure>

					<div className={styles.soundButton}>
						<PlaySoundButton src={sound} />
					</div>
				</div>

				<div className={styles.body}>
					<div className={styles.bodyTop}>
						<div className={styles.content}>
							<h1 className={styles.name}>{name}</h1>

							<p className={styles.types}>{types.join(', ')}</p>
						</div>

						<FavoriteButton id={id} isFavorite={isFavorite} size="lg" name={name} refetch={refetch} />
					</div>

					<div className={styles.bodyBottom}>
						<VitalSigns cp={maxCP} hp={maxHP} />
					</div>
				</div>

				<div className={styles.params}>
					<div className={styles.param}>
						<p className={styles.paramName}>Weight</p>
						<p>
							{weight.minimum} - {weight.maximum}
						</p>
					</div>

					<div className={styles.param}>
						<p className={styles.paramName}>Height</p>
						<p>
							{height.minimum} - {height.maximum}
						</p>
					</div>
				</div>
			</article>

			{evolutions.length > 0 && (
				<section>
					<h2 className={styles.heading}>Evolutions</h2>

					<CardsList>
						{evolutions.map((evolution, idx) => (
							<Card key={idx} {...evolution} refetch={refetch} />
						))}
					</CardsList>
				</section>
			)}
		</>
	);
};

export { DetailCard };
