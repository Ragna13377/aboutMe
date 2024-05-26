import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './style.module.scss';

export type ButtonProps = PropsWithChildren & {
	onClick?: () => void;
	extraClass?: string;
};
const Button = ({ children, extraClass, onClick }: ButtonProps) => (
	<button onClick={onClick} className={clsx(styles.button, extraClass)}>
		{children}
	</button>
);

export default Button;
