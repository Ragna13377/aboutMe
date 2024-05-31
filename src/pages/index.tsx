import { useRef, useState } from 'react';
import { socials, stack } from '@pages/constants';
import { experience } from '@widgets/ConsoleWindow/constants';
import { useUpdatePosition } from '@pages/hooks/useUpdatePosition';
import ConsoleWindow from '@widgets/ConsoleWindow';
import Label from '@widgets/Label';
import TechnologyList from '@widgets/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import { useCustomDrop } from '@pages/hooks/useCustomDrop';
import docx from './images/docx.svg';
import styles from './style.module.scss';
import { aboutMe } from '@shared/constants';
import TextContainer from '@entities/TextContainer';

const Home = () => {
	const [isConsoleShown, setIsConsoleShown] = useState(true);
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
				<WelcomeContent />
				<TextContainer title='Навыки'>
					<TechnologyList
						orientation='vertical'
						listType='stack'
						technologies={stack}
					/>
				</TextContainer>
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
