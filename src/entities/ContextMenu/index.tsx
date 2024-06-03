import { useEffect } from 'react';
import { ContextMenuProps } from '@entities/ContextMenu/types';
import { downloadFile } from '@entities/ContextMenu/utils';
import ContextMenuItem from '@entities/ContextMenuItem';
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
			<ContextMenuItem onClick={handleOpen}>Открыть</ContextMenuItem>
			<ContextMenuItem onClick={() => downloadFile('docx')}>
				Скачать в docx
			</ContextMenuItem>
			<ContextMenuItem onClick={() => downloadFile('pdf')}>
				Скачать в pdf
			</ContextMenuItem>
		</ul>
	);
};

export default ContextMenu;
