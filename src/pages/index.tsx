import { useRef, useState } from 'react';
import { aboutMe, hobby } from '@shared/constants';
import { errorsText, socials, stack } from '@pages/constants';
import { experience } from '@widgets/ConsoleWindow/constants';
import { ErrorsState } from '@widgets/ErrorBox/types';
import { AppState } from '@shared/types';
import { useCustomDrop } from '@pages/hooks/useCustomDrop';
import { useUpdatePosition } from '@pages/hooks/useUpdatePosition';
import TextContainer from '@entities/TextContainer';
import ConsoleWindow from '@widgets/ConsoleWindow';
import ErrorBox from '@widgets/ErrorBox';
import Label from '@widgets/Label';
import TechnologyList from '@widgets/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import docx from './images/docx.svg';
import styles from './style.module.scss';

const Home = () => {
	const [appState, setAppState] = useState<AppState>(AppState.active);
	const [isConsoleShown, setIsConsoleShown] = useState(false);
	const [isErrorShown, setIsErrorShown] = useState<ErrorsState>([
		false,
		false,
		false,
		false,
	]);
	const { state: position, dispatch: setPosition } = useUpdatePosition();
	const areaRef = useRef<HTMLDivElement>(null);
	useCustomDrop({
		ref: areaRef,
		setPosition,
	});
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content} ref={areaRef}>
				<WelcomeContent
					appState={appState}
					setAppState={setAppState}
					setIsConsoleShown={setIsConsoleShown}
					externalClass={styles.gridMiddle}
				/>
				<TechnologyList
					externalStyles={styles.gridBottom}
					orientation='horizontal'
					listType='socials'
					technologies={socials}
				/>
				{appState !== AppState.active && (
					<>
						<TextContainer title='Навыки' externalStyles={styles.stackPosition}>
							<TechnologyList
								orientation='vertical'
								listType='stack'
								technologies={stack}
							/>
						</TextContainer>
						<TextContainer title='О себе' externalStyles={styles.aboutPosition}>
							<>
								<p>{aboutMe}</p>
								<h4>Хобби</h4>
								<p>{hobby}</p>
							</>
						</TextContainer>
					</>
				)}
				<Label
					image={docx}
					description='Резюме'
					handleOpen={() => setIsConsoleShown(true)}
					position={position.label}
				/>
				{isConsoleShown && (
					<ConsoleWindow
						textBlock={experience}
						processName='Work Progress'
						position={position.console}
						onClose={() => setIsConsoleShown(false)}
					/>
				)}
				{errorsText.map(
					(error, index) =>
						isErrorShown[index] && (
							<ErrorBox
								key={index}
								text={error}
								onClose={() =>
									setIsErrorShown((prev) => {
										const newState = [...prev];
										newState[index] = false;
										return newState as ErrorsState;
									})
								}
							/>
						)
				)}
			</div>
		</main>
	);
};

export default Home;
