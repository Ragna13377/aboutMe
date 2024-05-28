import { useDrag } from 'react-dnd';
import { CustomDragProps } from '@shared/types';

export const useCustomDrag = ({ type, ref }: CustomDragProps) => {
	const [{ isDrag }, drag, preview] = useDrag({
		type,
		item: { type },
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	});
	drag(ref);
	return { isDrag, preview };
};
