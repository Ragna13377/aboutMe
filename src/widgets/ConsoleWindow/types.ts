import { XYCoord } from 'react-dnd';
import { IntRange } from '@shared/types';

export type ConsoleTextBlock = {
	title: string;
	description: string;
	date?: string;
};
export type ConsoleWindowProps = {
	position: XYCoord;
	processName: string;
	onClose: () => void;
	textBlock?: ConsoleTextBlock[];
};

export type TSplitRangeLine = IntRange<20, 71>;
