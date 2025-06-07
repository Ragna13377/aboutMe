import React from 'react';
import { ContextMenuItemProps } from '@entities/ContextMenuItem/types';
import styles from './style.module.scss';

const ContextMenuItem = ({ children, onClick }: ContextMenuItemProps) => (
	<li className={styles.menuItem}>
		<button className={styles.menuButton} onClick={onClick}>
			{children}
		</button>
	</li>
);

export default ContextMenuItem;
