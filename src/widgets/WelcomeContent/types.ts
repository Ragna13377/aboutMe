import { AppState } from '@shared/types';

export type WelcomeContentProps = {
	appState: AppState;
	onClick: () => void;
	externalClass?: string;
};
