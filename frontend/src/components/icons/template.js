const {
	identifier,
	jsxClosingElement,
	jsxElement,
	jsxIdentifier,
	jsxOpeningElement,
	jsxSpreadAttribute,
} = require('@babel/types');

const template = ({ componentName, jsx }, { tpl }) => {
	const wrappedJsx = jsxElement(
		jsxOpeningElement(jsxIdentifier('Icon'), [jsxSpreadAttribute(identifier('props'))]),
		jsxClosingElement(jsxIdentifier('Icon')),
		[jsx],
		false
	);
	const customName = `${componentName.replace(/^Svg/, '')}Icon`;

	return tpl`
		import { Icon, IconProps } from './Icon';

		const ${customName} = ({ ...props }: IconProps) => {
			return (
				${wrappedJsx}
			)
		}

		export { ${customName} };
	`;
};

module.exports = template;
