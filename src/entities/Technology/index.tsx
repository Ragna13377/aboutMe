import { clsx } from 'clsx';
import { TechnologyType } from '@shared/types';
import { technologyImages } from '@entities/Technology/constants';
import { setFirstLetterUpperCase } from '@shared/utils';
import styles from './style.module.scss';

export type TechnologyProps = {
	type: TechnologyType;
	href?: string;
};
const Technology = ({ type, href }: TechnologyProps) => (
	<li className={styles.technology}>
		<a
			className={clsx(styles.technologyItem, { [styles.technologyLink]: href })}
			href={href}
			target={'_blank'}
			rel='noreferrer'
		>
			<img src={technologyImages[type]} alt={`${type} link`} />
			{!href && setFirstLetterUpperCase(type)}
		</a>
	</li>
);

export default Technology;
