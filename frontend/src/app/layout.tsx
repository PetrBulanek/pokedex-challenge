import { ScrollbarWidth } from '@/components/ScrollbarWidth/ScrollbarWidth';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { ApolloWrapper } from '../lib/graphql';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pokédex Challenge',
};

export default function RootLayout({ modal, children }: { modal: ReactNode; children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ApolloWrapper>
					<ScrollbarWidth />
					<Toaster />

					{children}
					{modal}
				</ApolloWrapper>
			</body>
		</html>
	);
}
