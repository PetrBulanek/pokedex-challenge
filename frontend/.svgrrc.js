module.exports = {
	icon: true,
	typescript: true,
	expandProps: false,
	svgProps: {
		['aria-hidden']: true,
		role: 'presentation',
		focusable: false,
	},
	template: require('./src/components/icons/template.js'),
	outDir: './src/components/icons',
};
