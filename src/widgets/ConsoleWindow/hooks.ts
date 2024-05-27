import { useDrag } from 'react-dnd';
import { useEffect } from 'react';
import { CustomDragProps } from '@widgets/ConsoleWindow/types';

export const useCustomDrag = ({ ref, position }: CustomDragProps) => {
	const [{ isDrag }, drag] = useDrag({
		type: 'console',
		item: {x: position.x, y: position.y},
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	});
	drag(ref);
	useEffect(() => {
		if(isDrag) window.getSelection()?.removeAllRanges();
	}, [isDrag]);
}