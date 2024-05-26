import { useState } from 'react';
import TechnologyList from '@features/TechnologyList';
import WelcomeContent from '@widgets/WelcomeContent';
import { email, github, telegram } from '@shared/constants';
import styles from './style.module.scss';

const Home = () => {
	const [appState, setAppState] = useState(false);
	return (
		<main className={styles.main}>
			<div className={styles.layout} />
			<div className={styles.content}>
				<WelcomeContent onClick={() => setAppState(true)} />
				<TechnologyList
					orientation='vertical'
					technologies={[
						{ type: 'react' },
						{ type: 'redux' },
						{ type: 'typescript' },
						{ type: 'javascript' },
						{ type: 'jest' },
						{ type: 'cypress' },
						{ type: 'storybook' },
						{ type: 'webpack' },
						{ type: 'docker' },
						{ type: 'kubernetes' },
						{ type: 'git' },
						{ type: 'styled-components' },
					]}
				/>
				{/*<TechnologyList*/}
				{/*	technologies={[*/}
				{/*		{ type: 'gmail', href: email },*/}
				{/*		{ type: 'github', href: github },*/}
				{/*		{ type: 'telegram', href: telegram },*/}
				{/*	]}*/}
				{/*/>*/}
			</div>
		</main>
	);
};

export default Home;
