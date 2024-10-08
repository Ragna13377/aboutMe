import { technologyImages } from '@entities/Technology/constants';
import { RefObject } from 'react';

export type TechnologyType = keyof typeof technologyImages;

export type TTechnology = {
	type: TechnologyType;
	href?: string;
};

export type CustomDragProps = {
	type: string;
	ref: RefObject<HTMLElement>;
};

type Enumerate<
	N extends number,
	Acc extends number[] = [],
> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;

export type availableFileType = 'doc' | 'pdf';

export enum AppState {
	'active',
	'error',
	'disabled',
}

export type TTextBlock = {
	title: string;
	description: string;
	date?: string;
};
