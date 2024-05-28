import { clsx } from 'clsx';
import { XYCoord } from 'react-dnd';
import { useRef } from 'react';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import { useRemoveFocus } from '@features/Label/hooks';
import styles from './style.module.scss';

export type LabelProps = {
	image: string;
	description: string;
	handleOpen: () => void;
	position: XYCoord;
};
const Label = ({ image, description, handleOpen, position }: LabelProps) => {
	const labelRef = useRef<HTMLButtonElement>(null);
	useCustomDrag({ type: 'label', ref: labelRef });
	const { isFocus, setIsFocus } = useRemoveFocus(labelRef);
	return (
		<button
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
			className={clsx(styles.labelContainer, { [styles.focused]: isFocus })}
			onClick={() => setIsFocus(true)}
			onDoubleClick={handleOpen}
			ref={labelRef}
		>
			<img className={styles.labelImage} src={image} alt='label' />
			<p className={styles.labelDescription}>{description}</p>
		</button>
	);
};

export default Label;
