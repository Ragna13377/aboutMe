import { clsx } from 'clsx';
import { ButtonProps } from '@entities/Button/types';
import styles from './style.module.scss';

const Button = ({ children, extraClass, onClick }: ButtonProps) => (
	<button onClick={onClick} className={clsx(styles.button, extraClass)}>
		{children}
	</button>
);

export default Button;
