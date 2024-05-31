import {
	ConsoleTextBlock,
	TSplitRangeLine,
} from '@widgets/ConsoleWindow/types';

export const formatText = (
	data: ConsoleTextBlock[],
	maxLineLength?: TSplitRangeLine
) =>
	data.reduce((acc: string[], { date, title, description }) => {
		if (!maxLineLength)
			acc.push(`\n${date ? date + '\t' : ''}${title}\n${description}`);
		else {
			acc = acc.concat(
				separateByLength(
					`${date ? date + '\t' : ''}${title}`,
					maxLineLength
				).concat(separateByLength(`${description}`, maxLineLength))
			);
		}
		acc.push('='.repeat(60));
		return acc;
	}, []);

const separateByLength = (text: string, maxLineLength: number): string[] => {
	if (text.length <= maxLineLength) return [text];
	const index = text.slice(0, maxLineLength).lastIndexOf(' ');
	if (index === -1) return [text.slice(0, maxLineLength)];
	return [text.slice(0, index)].concat(
		separateByLength(text.slice(index + 1), maxLineLength)
	);
};
