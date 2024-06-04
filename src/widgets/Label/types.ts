import { XYCoord } from 'react-dnd';

export type LabelProps = {
	image: string;
	description: string;
	handleOpen: () => void;
	position: XYCoord;
};
