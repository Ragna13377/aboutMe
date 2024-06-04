import { XYCoord } from 'react-dnd';
import { IntRange, TTextBlock } from '@shared/types';

export type ConsoleWindowProps = {
	position: XYCoord;
	processName: string;
	onClose: () => void;
	textBlock: TTextBlock[];
};

export type TSplitRangeLine = IntRange<20, 71>;
