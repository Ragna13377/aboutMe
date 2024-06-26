import { clsx } from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ConsoleWindowProps } from '@widgets/ConsoleWindow/types';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import { formatText } from '@widgets/ConsoleWindow/utils';
import TypeWriter from '@features/TypeWriter';
import styles from './style.module.scss';

const ConsoleWindow = ({
	position,
	processName,
	onClose,
	textBlock,
}: ConsoleWindowProps) => {
	const [isMinimized, setIsMinimized] = useState(false);
	const consoleRef = useRef<HTMLDivElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const { isDrag } = useCustomDrag({ type: 'console', ref: panelRef });
	const formattedText = useMemo(() => formatText(textBlock, true, 70), []);
	useEffect(() => {
		if (isDrag) window.getSelection()?.removeAllRanges();
	}, [isDrag]);
	return (
		<article
			ref={consoleRef}
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
			className={clsx(styles.container, {
				[styles.minimized]: isMinimized,
			})}
		>
			<div className={styles.panel} ref={panelRef}>
				<h2 className={styles.panelTitle}>{processName}</h2>
				<div className={styles.panelTools}>
					<button
						onClick={() => setIsMinimized(true)}
						className={clsx(styles.button, styles.hideButton)}
					/>
					<button
						onClick={() => setIsMinimized(false)}
						className={clsx(styles.button, styles.showButton)}
					/>
					<button
						onClick={onClose}
						className={clsx(styles.button, styles.closeButton)}
					/>
				</div>
			</div>
			<div className={styles.content} ref={contentRef}>
				{textBlock && (
					<p className={styles.textBlock}>
						<TypeWriter
							text={formattedText}
							speed={250}
							delay={1500}
							container={contentRef}
						/>
					</p>
				)}
			</div>
		</article>
	);
};

export default ConsoleWindow;
