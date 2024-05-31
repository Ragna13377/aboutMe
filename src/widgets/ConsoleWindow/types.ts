import { XYCoord } from 'react-dnd';
import { IntRange } from '@shared/types';

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

export type TSplitRangeLine = IntRange<20, 71>;
