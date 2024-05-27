import { PropsWithChildren } from 'react';
import styles from './style.module.scss';

const GlitchText = ({ children }: PropsWithChildren) => (
	<p className={styles.glitchText} data-text={children}>{children}</p>
);

export default GlitchText;
