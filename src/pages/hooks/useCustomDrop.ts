import { useDrop } from 'react-dnd';
import { dropTypes } from '@shared/types';
import { CustomDropProps } from '@pages/types';
import { useUpdatePosition } from '@pages/hooks/useUpdatePosition';

export const useCustomDrop = ({ ref }: CustomDropProps) => {
	const { state: position, dispatch: setPosition } = useUpdatePosition();
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
	return {
		position,
	};
};
