import clsx from 'clsx';
import styles from './VitalSigns.module.scss';

type VitalSignsProps = {
	cp: number;
	hp: number;
};

const VitalSigns = ({ cp, hp }: VitalSignsProps) => {
	return (
		<div className={styles.vitalSigns}>
			<div className={clsx(styles.bar, styles.barCP)} />

			<p className={styles.label}>CP: {cp}</p>

			<div className={clsx(styles.bar, styles.barHP)} />

			<p className={styles.label}>HP: {hp}</p>
		</div>
	);
};

export { VitalSigns };
