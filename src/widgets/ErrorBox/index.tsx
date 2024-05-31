import { ErrorBoxProps } from '@widgets/ErrorBox/types';
import error from './images/error.svg';
import styles from './style.module.scss';

const ErrorBox = ({ text, onClose }: ErrorBoxProps) => (
	<div className={styles.container}>
		<div className={styles.content}>
			<div className={styles.info}>
				<img className={styles.image} src={error} alt='error icon' />
				<p className={styles.errorText}>{text}</p>
			</div>
			<button onClick={onClose} className={styles.button}>ОК</button>
		</div>
	</div>
);

export default ErrorBox;
