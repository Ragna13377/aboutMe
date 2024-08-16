import { MouseEvent, useEffect, useState } from 'react';
import { menuWidth } from '@widgets/ContextMenu/constants';
import { XYCoord } from 'react-dnd';
import { emptyPosition } from '@shared/constants';

export const useContextMenu = (isDrag: boolean) => {
	const [isContextShown, setIsContextShown] = useState(false);
	const [contextMenuPosition, setContextMenuPosition] =
		useState<XYCoord>(emptyPosition);

	useEffect(() => {
		if (isDrag) setIsContextShown(false);
	}, [isDrag]);

	const handleContextClick = (e: MouseEvent) => {
		e.preventDefault();
		const x = Math.min(e.clientX, window.innerWidth - menuWidth);
		const y = e.clientY;
		setContextMenuPosition({ x, y });
		setIsContextShown(true);
	};
	return {
		handleContextClick,
		isContextShown,
		setIsContextShown,
		contextMenuPosition,
	};
};
