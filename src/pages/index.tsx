import React from 'react';
import styles from './style.module.scss';

const Home = () => (
	<main className={styles.main}>
		<div className={styles.layout} />
		<div className={styles.content}>
			<p className={styles.helloText}>Hello World!</p>
			<button className={styles.button}>Нажми меня</button>
		</div>
	</main>
);

export default Home;
