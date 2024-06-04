import { CSSProperties } from 'react';

export type ErrorBoxProps = {
	text: string;
	errorIndex: number;
	onClose: () => void;
	style?: CSSProperties;
};
