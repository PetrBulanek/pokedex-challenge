import { Icon, IconProps } from './Icon';
const ListViewIcon = ({ ...props }: IconProps) => {
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
				<path d="M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z" />
			</svg>
		</Icon>
	);
};
export { ListViewIcon };
