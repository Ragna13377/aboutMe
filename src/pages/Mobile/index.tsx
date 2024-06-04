import { useIsMobile } from '@shared/hooks/useIsMobile';
import styles from './style.module.scss';
import TechnologyList from '@widgets/TechnologyList';
import { socials, stack } from '@pages/Home/constants';
import TextContainer from '@entities/TextContainer';
import { aboutMe, education, experience, hobby } from '@shared/constants';
import { Fragment } from 'react';

const Mobile = () => {
	useIsMobile();
	return (
		<div className={styles.container}>
			<TextContainer title='Опыт работы' externalStyles={styles.textBlock}>
				{experience.map((el, index) => (
					<Fragment key={index}>
						<h4>{el.title}</h4>
						<p>{el.description}</p>
					</Fragment>
				))}
			</TextContainer>
			<TextContainer title='Навыки' externalStyles={styles.textBlock}>
				<TechnologyList
					orientation='vertical'
					listType='stack'
					technologies={stack}
				/>
			</TextContainer>
			<TextContainer title='Образование' externalStyles={styles.textBlock}>
				<p>{education}</p>
			</TextContainer>
			<TextContainer title='О себе' externalStyles={styles.textBlock}>
				<>
					<p>{aboutMe}</p>
					<h4>Хобби</h4>
					<p>{hobby}</p>
				</>
			</TextContainer>
			<TechnologyList
				externalStyles={styles.socials}
				orientation='vertical'
				listType='socials'
				technologies={socials}
			/>
		</div>
	);
};

export default Mobile;
