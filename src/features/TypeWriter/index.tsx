import { memo, useEffect, useState } from 'react';
import { TypeWriterProps } from '@features/TypeWriter/types';

const TypeWriter = ({ text, speed, delay, container }: TypeWriterProps) => {
	const [currentText, setCurrentText] = useState('Loading...');
	const [currentIndex, setCurrentIndex] = useState(-1);
	useEffect(() => {
		let delayTimeout: ReturnType<typeof setTimeout>;
		let interval: ReturnType<typeof setTimeout>;
		if (currentIndex === -1) {
			delayTimeout = setTimeout(() => {
				setCurrentIndex(0);
			}, delay);
		} else if (currentIndex <= text.length) {
			interval = setInterval(() => {
				if (currentIndex < text.length) {
					setCurrentText((prev) => prev + '\n' + text[currentIndex]);
					setCurrentIndex((prev) => prev + 1);
					if (container.current) container.current.scrollTop = container.current.scrollHeight;
				} else {
					setCurrentText((prev) => prev + '\n');
					setCurrentIndex((prev) => prev + 1);
					if (container.current) container.current.scrollTop = container.current.scrollHeight;
					clearInterval(interval);
				}
			}, speed);
		}
		return () => {
			if (delayTimeout) clearTimeout(delayTimeout);
			if (interval) clearInterval(interval);
		};
	}, [currentIndex, delay, speed, text]);
	return currentText;
};

export default memo(TypeWriter);
