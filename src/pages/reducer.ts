import { Reducer } from 'react';
import { dropTypes } from '@shared/types';
import { XYCoord } from 'react-dnd';
export type UpdatePositionState = Record<dropTypes, XYCoord>;
export type UpdatePositionAction = {
	type: dropTypes;
	payload: XYCoord;
}
export const updatePosition: Reducer<UpdatePositionState, UpdatePositionAction> = (value, action ) => {
	switch (action.type) {
		case 'console':
			return {...value, console: action.payload}
		case 'label':
			return {...value, label: action.payload}
		default:
			return value;
	}
}
export const initialStateUpdatePosition: UpdatePositionState = {
	console: {x: 0, y: 0},
	label: {x: 0, y: 0},
}
