import { useRef, useState } from 'react';
import { aboutMe } from '@shared/constants';
import { errorsText, socials, stack } from '@pages/constants';
import { experience } from '@widgets/ConsoleWindow/constants';
import { ErrorsState } from '@widgets/ErrorBox/types';
import { AppState } from '@shared/types';
import { useCustomDrop } from '@pages/hooks/useCustomDrop';
import { useUpdatePosition } from '@pages/hooks/useUpdatePosition';
import TextContainer from '@entities/TextContainer';
import ConsoleWindow from '@widgets/ConsoleWindow';
import ErrorBox from '@widgets/ErrorBox';
import { formatText } from '@widgets/ConsoleWindow/utils';
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
				/>
				<TextContainer title='Навыки'>
					<TechnologyList
						orientation='vertical'
						listType='stack'
						technologies={stack}
					/>
				</TextContainer>
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
				{/*<TextContainer title='О себе'>*/}
				{/*	{formatText(aboutMe)}*/}
				{/*</TextContainer>*/}
				<TechnologyList
					orientation='horizontal'
					listType='socials'
					technologies={socials}
				/>
				<Label
					image={docx}
					description='Резюме'
					handleOpen={() => setIsConsoleShown(true)}
					position={position.label}
				/>
				{isConsoleShown && (
					<ConsoleWindow
						textBlock={experience.concat(aboutMe)}
						processName='Work Progress'
						position={position.console}
						onClose={() => setIsConsoleShown(false)}
					/>
				)}
			</div>
		</main>
	);
};

export default Home;
