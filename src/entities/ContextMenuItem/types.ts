import { PropsWithChildren } from 'react';

export type ContextMenuItemProps = PropsWithChildren & {
	onClick: () => void;
};
