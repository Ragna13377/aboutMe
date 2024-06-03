import { RefObject } from 'react';
import { dropTypes } from '@shared/types';
import { XYCoord } from 'react-dnd';

export type UpdatePositionState = Record<
	dropTypes,
	XYCoord & { currentPosition: XYCoord }
>;

export type UpdatePositionAction = {
	type: dropTypes;
	payload: XYCoord;
};

export type CustomDropProps = {
	ref: RefObject<HTMLDivElement>;
};
