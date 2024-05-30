import React, { useEffect, useState } from 'react';
import styles from '@widgets/ConsoleWindow/style.module.scss';

export type TypeWriterProps = {
	text: string[];
	speed: number;
	delay: number;
};
const TypeWriter = ({ text, speed, delay }: TypeWriterProps) => {
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
				} else {
					setCurrentText((prev) => prev + '\n');
					setCurrentIndex((prev) => prev + 1);
					clearInterval(interval);
				}
			}, speed);
		}
		return () => {
			if (delayTimeout) clearTimeout(delayTimeout);
			if (interval) clearInterval(interval);
		};
	}, [currentIndex, delay, speed, text]);
	return <pre className={styles.textBlock}>{currentText}</pre>;
};

export default TypeWriter;
