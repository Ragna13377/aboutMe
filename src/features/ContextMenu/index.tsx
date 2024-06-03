import { useEffect } from 'react';
import { resumeFileName } from '@shared/constants';
import { ContextMenuProps } from '@features/ContextMenu/types';
import { downloadFile } from '@shared/utils';
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
			<ContextMenuItem onClick={() => downloadFile(resumeFileName, 'docx')}>
				Скачать в docx
			</ContextMenuItem>
			<ContextMenuItem onClick={() => downloadFile(resumeFileName, 'pdf')}>
				Скачать в pdf
			</ContextMenuItem>
		</ul>
	);
};

export default ContextMenu;
