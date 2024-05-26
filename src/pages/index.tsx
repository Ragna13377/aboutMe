import { useState } from 'react';
import { socials, stack } from '@pages/constants';
import ConsoleTable from '@widgets/ConsoleTable';
import TechnologyList from '@features/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import styles from './style.module.scss';

const Home = () => {
	const [appState, setAppState] = useState(false);
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content}>
				<WelcomeContent onClick={() => setAppState(true)} />
				<TechnologyList
					title='Навыки'
					orientation='vertical'
					listType='stack'
					technologies={stack}
				/>
				<ConsoleTable info='текст'/>
				<TechnologyList
					orientation='horizontal'
					listType='socials'
					technologies={socials}
				/>
			</div>
		</main>
	);
};

export default Home;
