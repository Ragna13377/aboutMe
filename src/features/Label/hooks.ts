import { RefObject, useEffect, useState } from 'react';

export const useRemoveFocus = (ref: RefObject<HTMLButtonElement>) => {
	const [isFocus, setIsFocus] = useState(false);
	useEffect(() => {
		const removeFocus = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node))
				setIsFocus(false);
		};
		if (isFocus) document.addEventListener('click', removeFocus);
		return () => document.removeEventListener('click', removeFocus);
	}, [isFocus, ref]);
	return {
		isFocus,
		setIsFocus,
	};
};
