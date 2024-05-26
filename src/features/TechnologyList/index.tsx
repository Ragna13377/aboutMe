import { clsx } from 'clsx';
import Technology, { TechnologyProps } from '@entities/Technology';
import styles from './style.module.scss';

export type TechnologyListProps = {
	technologies: TechnologyProps[];
	orientation: 'horizontal' | 'vertical';
};

const TechnologyList = ({ technologies, orientation }: TechnologyListProps) => (
	<ul className={clsx(styles.technologyList, styles[`${orientation}Orientation`])}>
		{technologies.map((technology) => (
			<Technology key={technology.type} {...technology} />
		))}
	</ul>
);

export default TechnologyList;
