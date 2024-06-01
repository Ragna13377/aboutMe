import { useCallback, useState } from 'react';
import { AppState } from '@shared/types';
import { ErrorsState } from '@widgets/ErrorBox/types';

export const useAppState = () => {
	const [appState, setAppState] = useState<AppState>(AppState.active);
	const [isConsoleShown, setIsConsoleShown] = useState(false);
	const [isErrorShown, setIsErrorShown] = useState<ErrorsState>([
		false,
		false,
		false,
		false,
	]);
	const handleWelcomeClick = useCallback(() => {
		if(appState === AppState.active) {
			setIsConsoleShown(true);
		}
		else if(appState === AppState.error) {
			setIsErrorShown([true, true, true, true]);
		}
		if (appState !== AppState.disabled) {
			setAppState((prev) => prev + 1);
		}
	},[appState])
	return {
		appState,
		isErrorShown,
		setIsErrorShown,
		isConsoleShown,
		setIsConsoleShown,
		handleWelcomeClick
	}
}