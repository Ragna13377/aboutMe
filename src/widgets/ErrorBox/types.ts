import { CSSProperties } from 'react';

export type ErrorBoxProps = {
	text: string;
	onClose: () => void;
	style?: CSSProperties;
};
