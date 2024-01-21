'use client';
import { useEffect } from 'react';
import useScrollbarSize from 'react-scrollbar-size';

const ScrollbarWidth = () => {
	const { width } = useScrollbarSize();

	useEffect(() => {
		document.documentElement.style.setProperty('--scrollbar-width', `${width}px`);

		return () => {
			document.documentElement.style.removeProperty('--scrollbar-width');
		};
	}, [width]);

	return null;
};

export { ScrollbarWidth };
