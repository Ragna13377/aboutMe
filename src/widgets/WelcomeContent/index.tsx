import React, { memo } from 'react';
import { AppState } from '@shared/types';
import { WelcomeContentProps } from '@widgets/WelcomeContent/types';
import GlitchText from '@entities/GlitchText';
import Button from '@entities/Button';
import styles from './style.module.scss';
import { getEnumKeyByValue } from '@shared/utils';

const WelcomeContent = ({ appState, setAppState }: WelcomeContentProps) => (
	<div className={styles.welcomeContent}>
		<GlitchText>Hello World!</GlitchText>
		<Button
			text={appState === AppState.active ? 'Open' : 'Error'}
			extraStyle={getEnumKeyByValue(AppState, appState)}
			onClick={() => {
				setAppState((prev) => {
					if (prev !== AppState.disabled) return prev + 1;
					return prev;
				});
			}}
		/>
	</div>
);

export default memo(WelcomeContent);
