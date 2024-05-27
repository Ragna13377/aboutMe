import { useRef, useState } from 'react';
import { experience, socials, stack } from '@pages/constants';
import ConsoleWindow from '@widgets/ConsoleWindow';
import TechnologyList from '@features/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import styles from './style.module.scss';
import { useDrop, XYCoord } from 'react-dnd';

const Home = () => {
	const [appState, setAppState] = useState(false);
	const [isConsoleShown, setIsConsoleShown] = useState(true);
	const areaRef = useRef<HTMLDivElement>(null);
	const [consolePosition, setConsolePosition] = useState<XYCoord>({x: 0, y: 0});
	const [_, drop] = useDrop({
		accept: 'console',
		drop: (item, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			if (delta) {
				let newX = consolePosition.x + delta.x;
				let newY = consolePosition.y + delta.y;
				setConsolePosition({ x: newX, y: newY });
			}
		},
	})
	drop(areaRef);
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content} ref={areaRef}>
				<WelcomeContent onClick={() => setAppState(true)} />
				<TechnologyList
					title='Навыки'
					orientation='vertical'
					listType='stack'
					technologies={stack}
				/>
				<TechnologyList
					orientation='horizontal'
					listType='socials'
					technologies={socials}
				/>
				{isConsoleShown &&
					<ConsoleWindow
						textBlock={experience}
						processName='Education Process'
						position={consolePosition}
						onClose={() => setIsConsoleShown(false)}
					/>
				}
			</div>
		</main>
	);
};

export default Home;
