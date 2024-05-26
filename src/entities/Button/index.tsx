import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './style.module.scss';

export type ButtonProps = PropsWithChildren & {
	extraClass?: string;
};
const Button = ({ children, extraClass }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, extraClass)}>{children}</button>
	);
};

export default Button;