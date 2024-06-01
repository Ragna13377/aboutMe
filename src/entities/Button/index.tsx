import { clsx } from 'clsx';
import { ButtonProps } from '@entities/Button/types';
import styles from './style.module.scss';

const Button = ({ text, onClick, extraStyle }: ButtonProps) => (
	<button
		onClick={onClick}
		className={clsx(styles.button, extraStyle && styles[extraStyle])}
	>
		{text}
	</button>
);

export default Button;
