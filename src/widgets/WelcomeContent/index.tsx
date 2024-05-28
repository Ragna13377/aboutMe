import React, { memo } from 'react';
import GlitchText from '@entities/GlitchText';
import Button from '@entities/Button';
import styles from './style.module.scss';

export type WelcomeContentProps = {
	onClick?: () => void;
};
const WelcomeContent = ({ onClick }: WelcomeContentProps) => (
	<div className={styles.welcomeContent}>
		<GlitchText>Hello World!</GlitchText>
		<Button onClick={onClick}>Open</Button>
	</div>
);

export default memo(WelcomeContent);
