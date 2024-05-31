import React, { memo } from 'react';
import { WelcomeContentProps } from '@widgets/WelcomeContent/types';
import GlitchText from '@entities/GlitchText';
import Button from '@entities/Button';
import styles from './style.module.scss';

const WelcomeContent = ({ onClick }: WelcomeContentProps) => (
	<div className={styles.welcomeContent}>
		<GlitchText>Hello World!</GlitchText>
		<Button onClick={onClick}>Open</Button>
	</div>
);

export default memo(WelcomeContent);
