import { RefObject } from 'react';
import { UpdatePositionAction, UpdatePositionState } from '@pages/reducer';

export type CustomDropProps = {
	positionState: UpdatePositionState;
	positionDispatch:  (value: UpdatePositionAction) => void
	ref: RefObject<HTMLDivElement>;
}