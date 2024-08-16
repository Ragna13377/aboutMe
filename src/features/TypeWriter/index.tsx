import { memo, useEffect, useState } from 'react';
import { TypeWriterProps } from '@features/TypeWriter/types';

const TypeWriter = ({ text, speed, delay, container }: TypeWriterProps) => {
	const [currentText, setCurrentText] = useState('Loading...');
	const [currentIndex, setCurrentIndex] = useState(-1);
	useEffect(() => {
		if (currentIndex === -1) {
			const delayTimeout = setTimeout(() => {
				setCurrentIndex(0);
			}, delay);
			return () => {
				clearTimeout(delayTimeout);
			}
		}
		if (currentIndex >= 0 && currentIndex <= text.length) {
			const interval = setInterval(() => {
				if (currentIndex <= text.length) {
					setCurrentText((prev) => prev + '\n' + (text[currentIndex] || ''));
					setCurrentIndex((prev) => prev + 1);
					if (container.current) container.current.scrollTop = container.current.scrollHeight;
				}
				if (currentIndex === text.length) {
					clearInterval(interval);
				}
			}, speed);
			return () => clearInterval(interval);
		}
	}, [currentIndex, delay, speed, text]);
	return currentText;
};

export default memo(TypeWriter);
