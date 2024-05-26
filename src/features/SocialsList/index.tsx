import Socials from '@entities/Socials';
import styles from './style.module.scss';

const SocialList = () => (
	<ul className={styles.socialsList}>
		<Socials type={'gmail'} href='#' />
		<Socials type={'github'} href='#' />
		<Socials type={'telegram'} href='#' />
	</ul>
);

export default SocialList;
