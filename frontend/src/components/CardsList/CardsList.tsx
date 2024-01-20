import { CardView } from '@/types';
import clsx from 'clsx';
import { Children, PropsWithChildren } from 'react';
import styles from './CardsList.module.scss';

type CardsListProps = PropsWithChildren<{
	view?: CardView;
}>;

const CardsList = ({ view = 'grid', children }: CardsListProps) => {
	return (
		<section>
			<ul className={clsx(styles.holder, styles[view])}>
				{Children.map(children, (child, index) => (
					<li key={index}>{child}</li>
				))}
			</ul>
		</section>
	);
};

export { CardsList };
