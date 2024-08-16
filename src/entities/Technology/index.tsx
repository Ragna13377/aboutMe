import { clsx } from 'clsx';
import React from 'react';
import { TTechnology } from '@shared/types';
import { technologyImages } from '@entities/Technology/constants';
import { setFirstLetterUpperCase } from '@shared/utils';
import styles from './style.module.scss';

const Technology = ({ type, href }: TTechnology) => (
	<li className={styles.technology}>
		{href ? (
			<a
				className={clsx(styles.technologyItem, styles.technologyLink)}
				href={href}
				target={'_blank'}
				rel='noreferrer'
			>
				<img src={technologyImages[type]} alt={`${type} link`} />
			</a>
		) : (
			<div className={styles.technologyItem}>
				<img src={technologyImages[type]} alt={`${type} technology`} />
				{setFirstLetterUpperCase(type)}
			</div>
		)}
	</li>
);

export default Technology;
