import { useReducer, useRef, useState } from 'react';
import { experience, socials, stack } from '@pages/constants';
import { initialStateUpdatePosition, updatePosition, UpdatePositionAction } from '@pages/reducer';
import ConsoleWindow from '@widgets/ConsoleWindow';
import Label from '@entities/Label';
import TechnologyList from '@features/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import { useCustomDrop } from '@pages/hooks';
import docx from './images/docx.svg'
import styles from './style.module.scss';

const Home = () => {
	const [isConsoleShown, setIsConsoleShown] = useState(true);
	const [positionState, dispatch] = useReducer(updatePosition, initialStateUpdatePosition);
	const areaRef = useRef<HTMLDivElement>(null);
	useCustomDrop({ref: areaRef, positionState, positionDispatch: dispatch});
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content} ref={areaRef}>
				<WelcomeContent onClick={() => {}} />
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
				<Label
					image={docx}
					description='Резюме'
					onDoubleClick={() => setIsConsoleShown(true)}
					position={positionState.label}
				/>
				{isConsoleShown &&
					<ConsoleWindow
						textBlock={experience}
						processName='Work Progress'
						position={positionState.console}
						onClose={() => setIsConsoleShown(false)}
					/>
				}
			</div>
		</main>
	);
};

export default Home;
