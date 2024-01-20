import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './Icon.module.scss';

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
	size?: 20 | 32 | 48;
};

const Icon = ({ size = 32, className, ...props }: IconProps) => {
	return <span {...props} className={clsx(styles.icon, styles[`size-${size}`], className)} />;
};

export { Icon };
