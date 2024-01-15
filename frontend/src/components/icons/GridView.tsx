import { Icon, IconProps } from './Icon';
const GridViewIcon = ({ ...props }: IconProps) => {
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
				<path d="M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z" />
			</svg>
		</Icon>
	);
};
export { GridViewIcon };