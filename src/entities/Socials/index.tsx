import { TSocialsType } from '@shared/types';
import styles from './style.module.scss';

export type SocialsProps = {
	type: TSocialsType;
	href: string;
};
const Socials = ({ type, href }: SocialsProps) => (
	<li className={styles.socials}>
		<a
			className={styles[type]}
			href={href}
			target={'_blank'}
			rel='noreferrer'
			aria-label={`${type} link`}
		/>
	</li>
);

export default Socials;
