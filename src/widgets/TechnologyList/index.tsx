import { clsx } from 'clsx';
import { TechnologyListProps } from '@widgets/TechnologyList/types';
import Technology from '@entities/Technology';
import styles from './style.module.scss';
import { memo } from 'react';

const TechnologyList = ({
	technologies,
	orientation,
	listType,
	title,
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

export default memo(TechnologyList);
