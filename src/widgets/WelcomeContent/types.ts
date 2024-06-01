import { Dispatch, SetStateAction } from 'react';
import { AppState } from '@shared/types';

export type WelcomeContentProps = {
	appState: AppState;
	setAppState: Dispatch<SetStateAction<AppState>>;
	externalClass?: string;
};
