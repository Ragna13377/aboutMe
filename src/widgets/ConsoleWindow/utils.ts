import { TTextBlock } from '@shared/types';
import { TSplitRangeLine } from '@widgets/ConsoleWindow/types';

export const formatText = (
	data: TTextBlock[],
	addSeparator = true,
	maxLineLength?: TSplitRangeLine
) => {
	return data.flatMap(({ date, title, description }) => {
		const formattedDateTitle = `${date ? date + '\n' : ''}${title}`;
		const lines = maxLineLength
			? [
				...separateByLength(formattedDateTitle, maxLineLength),
				...separateByLength(description, maxLineLength),
			]
			: [`\n${formattedDateTitle}\n${description}`];

		return addSeparator ? [...lines, '='.repeat(60)] : lines;
	});
}

const separateByLength = (text: string, maxLineLength: number): string[] => {
	if (text.length <= maxLineLength) return [text];
	const index = text.slice(0, maxLineLength).lastIndexOf(' ');
	return index === -1
		? [text.slice(0, maxLineLength)]
		: [text.slice(0, index)].concat(
		separateByLength(text.slice(index + 1), maxLineLength)
	);
};
