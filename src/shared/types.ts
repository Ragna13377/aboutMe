import { technologyImages } from '@entities/Technology/constants';

export type TechnologyType = keyof typeof technologyImages;

export type TTechnology = {
	type: TechnologyType;
	href?: string;
};
