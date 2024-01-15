import { Icon, IconProps } from './Icon';
const FavoriteIcon = ({ ...props }: IconProps) => {
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
				<path d="m12 21.18-1.45-1.32C5.4 15.19 2 12.1 2 8.32c0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.1a6 6 0 0 1 4.5-2.1c3.08 0 5.5 2.43 5.5 5.5 0 3.79-3.4 6.87-8.55 11.54z" />
			</svg>
		</Icon>
	);
};
export { FavoriteIcon };
