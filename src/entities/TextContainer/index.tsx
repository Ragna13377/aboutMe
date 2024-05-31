import { TextContainerProps } from '@entities/TextContainer/types';
import styles from './styles.module.scss';

const TextContainer = ({ title, children }: TextContainerProps) => (
	<div className={styles.container}>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.content}>{children}</div>
	</div>
);

export default TextContainer;
