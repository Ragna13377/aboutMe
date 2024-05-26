import styles from './style.module.scss';

export type ConsoleTableProps = {
	info: string;
}
const ConsoleTable = ({info}: ConsoleTableProps) => {
	return (
		<div>
			{info}
		</div>
	);
};

export default ConsoleTable;