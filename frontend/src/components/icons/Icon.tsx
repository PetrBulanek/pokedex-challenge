import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './Icon.module.scss';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
	size?: 20 | 24;
}

const Icon = ({ size = 24, className, ...props }: IconProps) => {
	return <span {...props} className={clsx(styles.icon, styles[`size-${size}`], className)} />;
};

export { Icon };
