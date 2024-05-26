import Button from '@entities/Button';
import GlitchText from '@entities/GlitchText';
import styles from './style.module.scss';

const Home = () => (
	<main className={styles.main}>
		<div className={styles.layout} />
		<div className={styles.content}>
			<GlitchText>Hello World!</GlitchText>
			<Button>Log in</Button>
		</div>
	</main>
);

export default Home;
