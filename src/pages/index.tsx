import React from 'react';
import GlitchText from '@entities/GlitchText';
import styles from './style.module.scss';

const Home = () => (
	<main className={styles.main}>
		<div className={styles.layout} />
		<div className={styles.content}>
			<GlitchText>Hello World!</GlitchText>
			<button className={styles.button}>{'Log in'}</button>
		</div>
	</main>
);

export default Home;
