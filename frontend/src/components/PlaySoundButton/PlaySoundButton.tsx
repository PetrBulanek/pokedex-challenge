import { useAudio } from '@/hooks/useAudio';
import { SpeakerIcon } from '../icons/Speaker';
import styles from './PlaySoundButton.module.scss';

type PlaySoundButtonProps = {
	src: string;
};

const PlaySoundButton = ({ src }: PlaySoundButtonProps) => {
	const audio = useAudio(src);

	return (
		<button onClick={() => audio.play()} aria-label="Play sound" className={styles.playSoundButton}>
			<SpeakerIcon size={48} />
		</button>
	);
};

export { PlaySoundButton };
