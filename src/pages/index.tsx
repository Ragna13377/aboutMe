import { useRef } from 'react';
import { aboutMe, hobby } from '@shared/constants';
import { errorsText, socials, stack } from '@pages/constants';
import { experience } from '@widgets/ConsoleWindow/constants';
import { ErrorsState } from '@widgets/ErrorBox/types';
import { AppState } from '@shared/types';
import { useAppState } from '@pages/hooks/useAppState';
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
	const {
		appState,
		isConsoleShown,
		setIsConsoleShown,
		isErrorShown,
		setIsErrorShown,
		handleWelcomeClick
	} = useAppState();
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
				{appState === AppState.disabled && errorsText.map(
					(error, index) =>
						isErrorShown[index] && (
							<ErrorBox
								key={index}
								text={error}
								style={{
									animationDelay: `${index * 0.2}s`,
									translate: `${-40 - 10 * index}% ${-150 + 50 * index}%`,
								}}
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
