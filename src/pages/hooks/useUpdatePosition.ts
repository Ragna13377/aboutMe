import { Reducer, useReducer } from 'react';
import { UpdatePositionAction, UpdatePositionState } from '@pages/types';
import { initialPosition } from '@pages/constants';

export const updatePositionReducer: Reducer<
	UpdatePositionState,
	UpdatePositionAction
> = (state, action) => {
	const { x, y } = action.payload;
	switch (action.type) {
		case 'console':
			const newConsoleX = state.console.currentPosition.x + x;
			const newConsoleY = state.console.currentPosition.y + y;
			return {
				...state,
				console: {
					...state.console,
					currentPosition: {
						...state.console.currentPosition,
						x: newConsoleX,
						y: newConsoleY,
					},
					x: newConsoleX,
					y: newConsoleY,
				},
			};
		case 'label':
			const newLabelX = state.label.currentPosition.x + x;
			const newLabelY = state.label.currentPosition.y + y;
			return {
				...state,
				label: {
					...state.label,
					currentPosition: {
						...state.label.currentPosition,
						x: newLabelX,
						y: newLabelY,
					},
					x: newLabelX,
					y: newLabelY,
				},
			};
		default:
			return state;
	}
};

export const useUpdatePosition = () => {
	const [state, dispatch] = useReducer(
		updatePositionReducer,
		initialStateUpdatePosition
	);
	return { state, dispatch };
};
export const initialStateUpdatePosition: UpdatePositionState = {
	console: { ...initialPosition, currentPosition: { ...initialPosition } },
	label: { ...initialPosition, currentPosition: { ...initialPosition } },
};
