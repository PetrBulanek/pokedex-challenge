import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './Container.module.scss';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = ({ className, ...props }: ContainerProps) => {
	return <div {...props} className={clsx(styles.container, className)} />;
};

export { Container };
