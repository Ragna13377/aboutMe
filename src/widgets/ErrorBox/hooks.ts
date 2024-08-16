import { useMemo, useState } from 'react';
import { errorsText } from '@pages/Home/constants';
import { getRandomSign } from '@shared/utils';

export const useErrorBox = () => {
	const errorsShift = useMemo(
		() => Array.from({ length: errorsText.length }, getRandomSign),
		[]
	);
	const [isErrorShown, setIsErrorShown] = useState<boolean[]>(
		() => new Array(errorsText.length).fill(false)
	);
	return {
		errorsShift,
		isErrorShown,
		setIsErrorShown,
	};
};
