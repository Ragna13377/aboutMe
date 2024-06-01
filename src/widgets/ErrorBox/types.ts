import { CSSProperties } from 'react';

export type ErrorBoxProps = {
	text: string;
	onClose: () => void;
	style?: CSSProperties
};

export type ErrorsState = [boolean, boolean, boolean, boolean];