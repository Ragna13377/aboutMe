import { XYCoord } from 'react-dnd';
import { RefObject } from 'react';

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
export type CustomDragProps = {
	position: XYCoord;
	ref: RefObject<HTMLDivElement>;
}