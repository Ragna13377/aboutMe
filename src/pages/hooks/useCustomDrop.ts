import { useDrop } from 'react-dnd';
import { dropTypes } from '@shared/types';
import { CustomDropProps } from '@pages/types';

export const useCustomDrop = ({ ref, setPosition }: CustomDropProps) => {
	const [_, drop] = useDrop({
		accept: ['console', 'label'],
		drop: (item: { type: dropTypes }, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			if (delta) {
				setPosition({
					type: item.type,
					payload: { x: delta.x, y: delta.y },
				});
			}
		},
	});
	drop(ref);
};
