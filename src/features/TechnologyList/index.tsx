import { clsx } from 'clsx';
import { TTechnology } from '@shared/types';
import Technology from '@entities/Technology';
import styles from './style.module.scss';

export type TGridPart = 'stack' | 'socials';
export type TechnologyListProps = {
	technologies: TTechnology[];
	orientation: 'horizontal' | 'vertical';
	listType: TGridPart;
	title?: string;
};

const TechnologyList = ({
	technologies,
	orientation,
	listType,
	                        title
}: TechnologyListProps) => (
	<ul
		className={clsx(
			styles.technologyList,
			styles[`${orientation}Orientation`],
			styles[`${listType}List`]
		)}
	>
		{title && <li className={styles.title}>{title}</li>}
		{technologies.map((technology) => (
			<Technology key={technology.type} {...technology} />
		))}
	</ul>
);

export default TechnologyList;
