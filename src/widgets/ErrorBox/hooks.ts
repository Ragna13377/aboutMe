import { useMemo, useState } from 'react';
import { errorsText } from '@pages/Home/constants';
import { getRandomSign } from '@shared/utils';

export const useErrorBox = () => {
	const errorsShift = useMemo(
		() => new Array(errorsText.length).fill(0).map(() => getRandomSign()),
		[]
	);
	const [isErrorShown, setIsErrorShown] = useState<boolean[]>(
		new Array(errorsText.length).fill(false)
	);
	return {
		errorsShift,
		isErrorShown,
		setIsErrorShown,
	};
};
