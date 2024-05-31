import { TTechnology } from '@shared/types';

export type TGridPart = 'stack' | 'socials';
export type TechnologyListProps = {
	technologies: TTechnology[];
	orientation: 'horizontal' | 'vertical';
	listType: TGridPart;
};