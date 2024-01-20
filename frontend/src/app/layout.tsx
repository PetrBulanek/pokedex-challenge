import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import { ApolloWrapper } from '../lib/graphql';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pokédex Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	);
}
