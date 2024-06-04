import { RefObject } from 'react';
import { XYCoord } from 'react-dnd';

export type UpdatePositionState = Record<
	string,
	XYCoord & { currentPosition: XYCoord }
>;

export type UpdatePositionAction = {
	type: string;
	payload: XYCoord;
};

export type CustomDropProps = {
	ref: RefObject<HTMLDivElement>;
};
