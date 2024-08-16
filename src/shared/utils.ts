import { availableFileType } from '@shared/types';

export const setFirstLetterUpperCase = (text: string) =>
	text.charAt(0).toUpperCase() + text.slice(1);
export function getEnumKeyByValue<T extends Record<string, number | string>>(
	enumObj: T,
	value: T[keyof T]
): keyof T {
	return Object.keys(enumObj).find((key) => enumObj[key] === value) as keyof T;
}
export const getRandomSign = () => (Math.random() < 0.5 ? -1 : 1);

export const downloadFile = (fileName: string, type: availableFileType) => {
	const link = document.createElement('a');
	const name = `${fileName}.${type}`;
	link.href = `./files/${name}`;
	link.type =
		type === 'doc'
			? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			: 'application/pdf';
	link.download = name;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export const throttle = (fn: () => void, delay: number): (() => void) => {
	let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
	return () => {
		if (!timeout) {
			timeout = setTimeout(() => {
				fn();
				clearTimeout(timeout);
				timeout = undefined;
			}, delay);
		}
	};
};
