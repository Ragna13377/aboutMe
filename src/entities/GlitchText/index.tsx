import React, { PropsWithChildren } from 'react';
import styles from '@pages/style.module.scss';

const GlitchText = ({ children }: PropsWithChildren) => (
	<p className={styles.glitchText}>{children}</p>
);

export default GlitchText;
