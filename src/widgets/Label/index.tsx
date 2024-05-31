import { clsx } from 'clsx';
import { XYCoord } from 'react-dnd';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { menuWidth } from '@entities/ContextMenu/constants';
import { emptyPosition } from '@shared/constants';
import { LabelProps } from '@widgets/Label/types';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import { useRemoveFocus } from '@widgets/Label/hooks';
import ContextMenu from '@entities/ContextMenu';
import styles from './style.module.scss';

const Label = ({ image, description, handleOpen, position }: LabelProps) => {
	const labelRef = useRef<HTMLButtonElement>(null);
	const [isContextShown, setIsContextShown] = useState(false);
	const [contextMenuPosition, setContextMenuPosition] = useState<XYCoord>(emptyPosition);
	const { isFocus, setIsFocus } = useRemoveFocus(labelRef);
	const { isDrag } = useCustomDrag({ type: 'label', ref: labelRef });
	useEffect(() => {
		if (isDrag) setIsContextShown(false);
	}, [isDrag]);
	const handleContextClick = (e: MouseEvent) => {
		e.preventDefault();
		const clientX = e.clientX;
		const clientY = e.clientY;
		const screenWidth = window.innerWidth;
		if (clientX > screenWidth - menuWidth)
			setContextMenuPosition({ x: screenWidth - menuWidth, y: clientY });
		else setContextMenuPosition({ x: clientX, y: clientY });
		setIsContextShown(true);
	};
	return (
		<>
			<button
				style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
				className={clsx(styles.labelContainer, { [styles.focused]: isFocus })}
				onClick={() => setIsFocus(true)}
				onDoubleClick={handleOpen}
				onContextMenu={handleContextClick}
				ref={labelRef}
			>
				<img className={styles.labelImage} src={image} alt='label' />
				<p className={styles.labelDescription}>{description}</p>
			</button>
			{isContextShown && (
				<ContextMenu
					position={contextMenuPosition}
					handleOpen={handleOpen}
					handleClose={() => setIsContextShown(false)}
				/>
			)}
		</>
	);
};

export default Label;
