export const setFirstLetterUpperCase = (text: string) =>
	text.charAt(0).toUpperCase() + text.slice(1);
export function getEnumKeyByValue<T extends Record<string, number | string>>(
	enumObj: T,
	value: T[keyof T]
): keyof T {
	return Object.keys(enumObj).find((key) => enumObj[key] === value) as keyof T;
}
export const getRandomSign = () => {
	return Math.random() < 0.5 ? -1 : 1;
};
