import { useEffect, useRef } from 'react';

export const useAudio = (src: string, { volume = 1 }: { volume?: number } = {}) => {
	const audio = useRef(new Audio(src));

	useEffect(() => {
		audio.current.volume = volume;
	}, [volume]);

	return audio.current;
};
