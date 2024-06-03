import { MouseEvent, useEffect, useState } from 'react';
import { menuWidth } from '@features/ContextMenu/constants';
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
		const clientX = e.clientX;
		const clientY = e.clientY;
		const screenWidth = window.innerWidth;
		if (clientX > screenWidth - menuWidth)
			setContextMenuPosition({ x: screenWidth - menuWidth, y: clientY });
		else setContextMenuPosition({ x: clientX, y: clientY });
		setIsContextShown(true);
	};
	return {
		handleContextClick,
		isContextShown,
		setIsContextShown,
		contextMenuPosition,
	}
}
