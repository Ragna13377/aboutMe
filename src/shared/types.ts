import { technologyImages } from '@entities/Technology/constants';
import { RefObject } from 'react';

export type dropTypes = 'console' | 'label';
export type TechnologyType = keyof typeof technologyImages;

export type TTechnology = {
	type: TechnologyType;
	href?: string;
};

export type CustomDragProps = {
	type: dropTypes;
	ref: RefObject<HTMLElement>;
}
