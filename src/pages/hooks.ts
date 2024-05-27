import { useDrop } from 'react-dnd';
import { dropTypes } from '@shared/types';
import { CustomDropProps } from '@pages/types';

export const useCustomDrop = ({ref, positionState, positionDispatch}: CustomDropProps) => {
	const [_, drop] = useDrop({
		accept: ['console', 'label'],
		drop: (item: {type: dropTypes}, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			if (delta) {
				// const newX = positionState[item.type].x + delta.x;
				// const newY = positionState[item.type].y + delta.y;
				// positionDispatch({type: item.type, payload:  { x: newX, y: newY }});
				positionDispatch({type: item.type, payload:  { x: delta.x, y: delta.y }});
			}
		},
		hover: (item: {type: dropTypes}, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			if (delta) {
				positionDispatch({type: item.type, payload:  { x: delta.x, y: delta.y }});
			}
		}
	})
	drop(ref);
}