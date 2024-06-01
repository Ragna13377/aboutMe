import { clsx } from 'clsx';
import { memo } from 'react';
import { AppState } from '@shared/types';
import { WelcomeContentProps } from '@widgets/WelcomeContent/types';
import { getEnumKeyByValue } from '@shared/utils';
import GlitchText from '@entities/GlitchText';
import Button from '@entities/Button';
import styles from './style.module.scss';

const WelcomeContent = ({
	appState,
	onClick,
	externalClass,
}: WelcomeContentProps) => (
	<div className={clsx(styles.welcomeContent, externalClass && externalClass)}>
		<GlitchText>Hello World!</GlitchText>
		<Button
			text={appState === AppState.active ? 'Open' : 'Error'}
			extraStyle={getEnumKeyByValue(AppState, appState)}
			onClick={onClick}
		/>
	</div>
);

export default memo(WelcomeContent);
