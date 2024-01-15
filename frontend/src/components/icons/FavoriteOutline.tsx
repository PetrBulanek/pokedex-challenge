import { Icon, IconProps } from './Icon';
const FavoriteOutlineIcon = ({ ...props }: IconProps) => {
	return (
		<Icon {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				aria-hidden={true}
				role="presentation"
				focusable={false}
			>
				<path d="M16.5 2.83c3.08 0 5.5 2.42 5.5 5.5 0 3.52-2.96 6.44-7.54 10.61L12 21.17l-2.13-1.92C5.1 14.91 2 11.94 2 8.32c0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.1a6 6 0 0 1 4.5-2.1Zm0 2c-1.54 0-3.04.99-3.56 2.35h-1.87A3.9 3.9 0 0 0 7.5 4.83c-2 0-3.5 1.5-3.5 3.5 0 2.88 3.14 5.73 7.9 10.04l.1.1.1-.1 1.85-1.68c3.7-3.4 6.05-5.87 6.05-8.37 0-2-1.5-3.5-3.5-3.5Z" />
			</svg>
		</Icon>
	);
};
export { FavoriteOutlineIcon };
