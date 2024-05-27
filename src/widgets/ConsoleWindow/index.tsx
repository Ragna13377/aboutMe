import { clsx } from 'clsx';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useCustomDrag } from '@shared/hooks/useCustomDrag';
import { ConsoleWindowProps } from '@widgets/ConsoleWindow/types';
import { DragPreviewImage } from 'react-dnd';
import styles from './style.module.scss';
import stub from '@images/stub.png';
import { initialStateUpdatePosition } from '@pages/reducer';

const ConsoleWindow = ({ position, processName, onClose, textBlock }: ConsoleWindowProps) => {
	const [isMinimized, setIsMinimized] = useState(false);
	const consoleRef = useRef<HTMLDivElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);
	const { isDrag, preview } = useCustomDrag({ type: 'console', ref: panelRef });
	useEffect(() => {
		if(isDrag) window.getSelection()?.removeAllRanges();
	}, [isDrag]);
	return (
		<>
			<DragPreviewImage connect={preview} src={stub} />
			<article ref={consoleRef}
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
				<div className={styles.content}>
					{textBlock && (
						<pre className={styles.textBlock}>
						{textBlock
							.map(
								({ date, title, description }) =>
									`${date}\t${title}\n${description}\n`
							)
							.join('\n')}
							{textBlock.map(({ date, title, description }, index) => (
								<Fragment key={index}>
									<div className={styles.textHeader}>
										<span className={styles.textDate}>{date}</span>
										<span className={styles.textTitle}>{title}</span>
									</div>
									<p className={styles.textDescription}>{description}</p>
									<p className={styles.textDivider} />
								</Fragment>
							))}
					</pre>
					)}
				</div>
			</article>
		</>
	);
};

export default ConsoleWindow;
