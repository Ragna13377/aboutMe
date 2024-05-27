import { XYCoord } from 'react-dnd';

export type ConsoleTextBlock = {
	date: string;
	title: string;
	description: string;
};
export type ConsoleWindowProps = {
	position: XYCoord;
	processName: string;
	onClose: () => void;
	textBlock?: ConsoleTextBlock[];
};
