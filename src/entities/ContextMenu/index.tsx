import { useEffect } from 'react';
import { ContextMenuProps } from '@entities/ContextMenu/types';
import { downloadFile } from '@entities/ContextMenu/utils';
import styles from './style.module.scss';

const ContextMenu = ({
	position,
	handleClose,
	handleOpen,
}: ContextMenuProps) => {
	useEffect(() => {
		document.addEventListener('click', handleClose);
		return () => document.removeEventListener('click', handleClose);
	}, [handleClose]);
	return (
		<ul
			onContextMenu={(e) => e.preventDefault()}
			className={styles.menu}
			style={{ insetInlineStart: position.x, insetBlockStart: position.y }}
		>
			<li className={styles.menuItem}>
				<button className={styles.menuButton} onClick={handleOpen}>
					Открыть
				</button>
			</li>
			<li className={styles.menuItem}>
				<button
					className={styles.menuButton}
					onClick={() => downloadFile('docx')}
				>
					Скачать в docx
				</button>
			</li>
			<li className={styles.menuItem}>
				<button
					className={styles.menuButton}
					onClick={() => downloadFile('pdf')}
				>
					Скачать в pdf
				</button>
			</li>
		</ul>
	);
};

export default ContextMenu;
