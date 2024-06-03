import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { AppState } from '@shared/types';
import { errorsText } from '@pages/constants';

export const useAppState = (
	setIsErrorShown: Dispatch<SetStateAction<boolean[]>>
) => {
	const [appState, setAppState] = useState<AppState>(AppState.active);
	const [isConsoleShown, setIsConsoleShown] = useState(false);
	const handleWelcomeClick = useCallback(() => {
		if (appState === AppState.active) {
			setIsConsoleShown(true);
		} else if (appState === AppState.error) {
			setIsErrorShown(new Array(errorsText.length).fill(true));
		}
		if (appState !== AppState.disabled) {
			setAppState((prev) => prev + 1);
		}
	}, [appState]);
	return {
		appState,
		isConsoleShown,
		setIsConsoleShown,
		handleWelcomeClick,
	};
};
