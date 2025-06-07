import { clsx } from 'clsx';
import React from 'react';
import { ButtonProps } from '@entities/Button/types';
import styles from './style.module.scss';

const Button = ({ text, onClick, appState, extraStyle }: ButtonProps) => (
	<button
		onClick={onClick}
		className={clsx(styles.button, appState && styles[appState], extraStyle)}
	>
		{text}
	</button>
);

export default Button;
