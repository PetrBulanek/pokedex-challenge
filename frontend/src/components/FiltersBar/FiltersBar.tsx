import { getPokemonTypes } from '@/app/lib/graphql/query';
import { CardView, TabView } from '@/types';
import { useQuery } from '@apollo/client';
import { ComboBox, TextInput } from '@carbon/react';
import clsx from 'clsx';
import { GridViewIcon } from '../icons/GridView';
import { ListViewIcon } from '../icons/ListView';
import styles from './FiltersBar.module.scss';

interface FiltersBarProps {
	activeTab: TabView;
	onTabChange: (view: TabView) => void;
	onCardViewChange: (view: CardView) => void;
	onSearchChange: (term: string) => void;
	onTypeChange: (type?: string | null) => void;
}

const FiltersBar = ({ activeTab, onTabChange, onCardViewChange, onSearchChange, onTypeChange }: FiltersBarProps) => {
	const { data } = useQuery(getPokemonTypes);

	return (
		<div className={styles.filtersBar}>
			<div className={styles.tabButtonsGroup}>
				<button
					type="button"
					className={clsx(styles.tabButton, activeTab === 'all' && styles.tabButtonActive)}
					onClick={() => onTabChange('all')}
				>
					All
				</button>

				<button
					type="button"
					className={clsx(styles.tabButton, activeTab === 'favorite' && styles.tabButtonActive)}
					onClick={() => onTabChange('favorite')}
				>
					Favorites
				</button>
			</div>

			<div className={styles.bottom}>
				<div className={styles.inputs}>
					<TextInput
						id="search"
						labelText="Search"
						hideLabel
						placeholder="Search"
						onChange={(event) => onSearchChange(event.target.value)}
					/>

					<ComboBox
						id="type"
						onChange={({ selectedItem }) => onTypeChange(selectedItem)}
						placeholder="Type"
						items={data?.pokemonTypes || []}
						downshiftProps={{ id: 'type' }}
					/>
				</div>

				<div className={styles.viewButtonsGroup}>
					<button
						type="button"
						aria-label="List view"
						onClick={() => onCardViewChange('list')}
						className={styles.viewButton}
					>
						<ListViewIcon />
					</button>

					<button
						type="button"
						aria-label="Grid view"
						onClick={() => onCardViewChange('grid')}
						className={styles.viewButton}
					>
						<GridViewIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export { FiltersBar };
