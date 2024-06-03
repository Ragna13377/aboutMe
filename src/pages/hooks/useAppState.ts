import { useCallback, useMemo, useState } from 'react';
import { AppState } from '@shared/types';
import { errorsText } from '@pages/constants';
import { getRandomSign } from '@shared/utils';

export const useAppState = () => {
	const [appState, setAppState] = useState<AppState>(AppState.active);
	const [isConsoleShown, setIsConsoleShown] = useState(false);
	const errorsShift = useMemo(
		() => new Array(errorsText.length).fill(0).map(() => getRandomSign()),
		[]
	);
	const [isErrorShown, setIsErrorShown] = useState<boolean[]>(
		new Array(errorsText.length).fill(false)
	);
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
		errorsShift,
		isErrorShown,
		setIsErrorShown,
		isConsoleShown,
		setIsConsoleShown,
		handleWelcomeClick,
	};
};
