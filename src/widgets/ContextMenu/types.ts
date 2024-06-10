import { XYCoord } from 'react-dnd';

export type ContextMenuProps = {
	position: XYCoord;
	handleClose: () => void;
	handleOpen: () => void;
};
