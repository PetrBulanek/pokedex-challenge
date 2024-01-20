import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:4000/graphql',
	documents: ['src/**/*.{ts,tsx}'],
	generates: {
		'./src/lib/gql/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
