export type ErrorBoxProps = {
	text: string;
	onClose: () => void;
};

export type ErrorsState = [boolean, boolean, boolean, boolean];