import { clsx } from 'clsx';
import { TTechnology } from '@shared/types';
import Technology from '@entities/Technology';
import styles from './style.module.scss';

export type TGridPart = 'stack' | 'socials';
export type TechnologyListProps = {
	technologies: TTechnology[];
	orientation: 'horizontal' | 'vertical';
	listType: TGridPart
};

const TechnologyList = ({ technologies, orientation, listType }: TechnologyListProps) => (
	<ul className={clsx(
		styles.technologyList,
		styles[`${orientation}Orientation`],
		styles[`${listType}List`]
	)}>
		{technologies.map((technology) => (
			<Technology key={technology.type} {...technology} />
		))}
	</ul>
);

export default TechnologyList;
