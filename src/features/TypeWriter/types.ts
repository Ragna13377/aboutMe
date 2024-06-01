import { RefObject } from 'react';

export type TypeWriterProps = {
	text: string[];
	speed: number;
	delay: number;
	container: RefObject<HTMLDivElement>;
	externalStyle?: string;
};
