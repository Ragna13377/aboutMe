import { clsx } from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { DragPreviewImage, XYCoord } from 'react-dnd';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import stub from '@images/stub.png';
import styles from './style.module.scss';

export type LabelProps = {
	image: string;
	description: string;
	onDoubleClick: () => void;
	position: XYCoord;
};
const Label = ({ image, description, onDoubleClick, position }: LabelProps) => {
	const [isFocus, setIsFocus] = useState(false);
	const labelRef = useRef<HTMLButtonElement>(null);
	const { isDrag } = useCustomDrag({ type: 'label', ref: labelRef });
	useEffect(() => {
		const removeFocus = (e: MouseEvent) => {
			if (labelRef.current && !labelRef.current.contains(e.target as Node))
				setIsFocus(false);
		};
		if (isFocus) document.addEventListener('click', removeFocus);
		return () => document.removeEventListener('click', removeFocus);
	}, [isFocus]);
	return (
		<button onContextMenu={(e) => e.preventDefault()}
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
			className={clsx(styles.labelContainer, { [styles.focused]: isFocus })}
			onClick={() => setIsFocus(true)}
			onDoubleClick={onDoubleClick}
			ref={labelRef}
		>
			<img className={styles.labelImage} src={image} alt='label' />
			<p className={styles.labelDescription}>{description}</p>
		</button>
	);
};

export default Label;
