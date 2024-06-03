import { clsx } from 'clsx';
import { XYCoord } from 'react-dnd';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { menuWidth } from '@features/ContextMenu/constants';
import { emptyPosition } from '@shared/constants';
import { LabelProps } from '@widgets/Label/types';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import { useRemoveFocus } from '@widgets/Label/hooks';
import ContextMenu from '@features/ContextMenu';
import styles from './style.module.scss';
import { useContextMenu } from '@features/ContextMenu/hooks';

const Label = ({ image, description, handleOpen, position }: LabelProps) => {
	const labelRef = useRef<HTMLButtonElement>(null);
	const { isFocus, setIsFocus } = useRemoveFocus(labelRef);
	const { isDrag } = useCustomDrag({ type: 'label', ref: labelRef });
	const {
		handleContextClick,
		isContextShown,
		setIsContextShown,
		contextMenuPosition
	} = useContextMenu(isDrag);
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
