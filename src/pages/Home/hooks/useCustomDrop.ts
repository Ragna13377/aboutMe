import { useDrop } from 'react-dnd';
import { CustomDropProps } from '@pages/Home/types';
import { useUpdatePosition } from '@pages/Home/hooks/useUpdatePosition';

export const useCustomDrop = ({ ref }: CustomDropProps) => {
	const { state: position, dispatch: setPosition } = useUpdatePosition();
	const [_, drop] = useDrop({
		accept: ['desktop'],
		drop: (item: { type: string }, monitor) => {
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
