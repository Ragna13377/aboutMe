import { Reducer, useReducer } from 'react';
import { UpdatePositionAction, UpdatePositionState } from '@pages/Home/types';
import { emptyPosition } from '@shared/constants';
import { errorsText } from '@pages/Home/constants';
import { XYCoord } from 'react-dnd';

export const updatePositionReducer: Reducer<
	UpdatePositionState,
	UpdatePositionAction
> = (state, action) => {
	const { x, y } = action.payload;
	const newX = state[action.type].currentPosition.x + x;
	const newY = state[action.type].currentPosition.y + y;
	if (action.type in state) {
		return {
			...state,
			[action.type]: {
				...state[action.type],
				currentPosition: {
					...state[action.type].currentPosition,
					x: newX,
					y: newY,
				},
				x: newX,
				y: newY,
			},
		};
	} else return state;
};

export const useUpdatePosition = () => {
	const [state, dispatch] = useReducer(
		updatePositionReducer,
		setInitialPosition()
	);
	return { state, dispatch };
};
const setInitialPosition = () => {
	const initialState: Record<string, XYCoord & { currentPosition: XYCoord }> = {
		console: { ...emptyPosition, currentPosition: { ...emptyPosition } },
		label: { ...emptyPosition, currentPosition: { ...emptyPosition } },
	};
	errorsText.forEach((_, index) => {
		initialState[`error${index}`] = {
			...emptyPosition,
			currentPosition: { ...emptyPosition },
		};
	});
	return initialState;
};
