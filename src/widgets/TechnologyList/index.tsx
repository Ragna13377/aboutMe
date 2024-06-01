import { clsx } from 'clsx';
import { memo } from 'react';
import { TechnologyListProps } from '@widgets/TechnologyList/types';
import Technology from '@entities/Technology';
import styles from './style.module.scss';

const TechnologyList = ({
	technologies,
	orientation,
	listType,
	externalStyles,
}: TechnologyListProps) => (
	<ul
		className={clsx(
			styles.technologyList,
			styles[`${orientation}Orientation`],
			styles[`${listType}List`],
			externalStyles && externalStyles
		)}
	>
		{technologies.map((technology) => (
			<Technology key={technology.type} {...technology} />
		))}
	</ul>
);

export default memo(TechnologyList);
