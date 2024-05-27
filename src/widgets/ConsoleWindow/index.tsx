import { clsx } from 'clsx';
import React, { Fragment, useState } from 'react';
import styles from './style.module.scss';

export type ConsoleTextBlock = {
	date: string;
	title: string;
	description: string;
};
export type ConsoleWindowProps = {
	processName?: string;
	textBlock?: ConsoleTextBlock[];
};
const ConsoleWindow = ({ processName, textBlock }: ConsoleWindowProps) => {
	const [isMinimized, setIsMinimized] = useState(false);
	const [isShow, setIsShow] = useState(true);
	return (
		<div
			className={clsx(styles.container, {
				[styles.minimized]: isMinimized,
				[styles.showed]: isShow,
			})}
		>
			<div className={styles.panel}>
				{processName}
				<div className={styles.tools}>
					<button
						onClick={() => setIsMinimized(false)}
						className={clsx(styles.button, styles.hideButton)}
					/>
					<button
						onClick={() => setIsMinimized(true)}
						className={clsx(styles.button, styles.showButton)}
					/>
					<button
						onClick={() => setIsShow(false)}
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
		</div>
	);
};

export default ConsoleWindow;
