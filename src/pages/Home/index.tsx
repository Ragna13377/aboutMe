import { useRef } from 'react';
import { aboutMe, education, hobby } from '@shared/constants';
import { errorsText, socials, stack } from '@pages/Home/constants';
import { consoleTextBlock } from '@widgets/ConsoleWindow/constants';
import {
	errorDelay,
	errorHorizontalOffset,
	errorVerticalOffset,
	errorVerticalShift,
} from '@widgets/ErrorBox/constants';
import { AppState } from '@shared/types';
import { useAppState } from '@pages/Home/hooks/useAppState';
import { useCustomDrop } from '@pages/Home/hooks/useCustomDrop';
import TextContainer from '@entities/TextContainer';
import ConsoleWindow from '@widgets/ConsoleWindow';
import ErrorBox from '@widgets/ErrorBox';
import Label from '@widgets/Label';
import TechnologyList from '@widgets/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import { useErrorBox } from '@widgets/ErrorBox/hooks';
import { useIsMobile } from '@shared/hooks/useIsMobile';
import docx from './images/docx.svg';
import styles from './style.module.scss';

const Home = () => {
	const { errorsShift, isErrorShown, setIsErrorShown } = useErrorBox();
	const { appState, isConsoleShown, setIsConsoleShown, handleWelcomeClick } =
		useAppState(setIsErrorShown);
	const areaRef = useRef<HTMLDivElement>(null);
	const { position } = useCustomDrop({ ref: areaRef });
	useIsMobile();
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content} ref={areaRef}>
				<WelcomeContent
					appState={appState}
					onClick={handleWelcomeClick}
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
						<TextContainer
							title='Образование'
							externalStyles={styles.educationPosition}
						>
							<p>{education}</p>
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
						textBlock={consoleTextBlock}
						processName='Resume'
						position={position.console}
						onClose={() => setIsConsoleShown(false)}
					/>
				)}
				{appState === AppState.disabled &&
					errorsText.map(
						(error, index) =>
							isErrorShown[index] && (
								<ErrorBox
									key={index}
									errorIndex={index}
									text={error}
									style={{
										animationDelay: `${index * errorDelay}s`,
										insetInlineStart: `calc(50% + ${errorVerticalShift * errorsShift[index] + errorVerticalOffset * index}%)`,
										insetBlockStart: `calc(25% + ${errorHorizontalOffset * index}%)`,
										transform: `translate(${position[`error${index}`].x}px, ${position[`error${index}`].y}px)`,
									}}
									onClose={() =>
										setIsErrorShown((prev) => {
											const newState = [...prev];
											newState[index] = false;
											return newState;
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
