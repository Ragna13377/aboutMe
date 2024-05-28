import { RefObject } from 'react';
import { dropTypes } from '@shared/types';
import { DropTargetMonitor, XYCoord } from 'react-dnd';

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
	setPosition: (value: UpdatePositionAction) => void;
};

export type TChangePosition = {
	item: { type: dropTypes };
	monitor: DropTargetMonitor<{ type: dropTypes }, unknown>;
	setPosition: (value: UpdatePositionAction) => void;
};
