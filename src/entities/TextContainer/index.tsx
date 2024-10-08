import { clsx } from 'clsx';
import React, { memo } from 'react';
import { TextContainerProps } from '@entities/TextContainer/types';
import styles from './styles.module.scss';

const TextContainer = ({
	title,
	externalStyles,
	children,
}: TextContainerProps) => (
	<div className={clsx(styles.container, externalStyles)}>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.content}>{children}</div>
	</div>
);

export default memo(TextContainer);
