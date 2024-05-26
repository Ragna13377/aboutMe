import { useState } from 'react';
import SocialsList from 'src/features/SocialsList';
import WelcomeContent from '@widgets/WelcomeContent';
import styles from './style.module.scss';

const Home = () => {
	const [appState, setAppState] = useState(false);
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content}>
				<WelcomeContent onClick={() => setAppState(true)} />
				<SocialsList />
			</div>
		</main>
	);
};

export default Home;
