import { TTextBlock } from '@shared/types';

export const email = 'mailto:quentin.gothic@gmail.com';
export const telegram = 'https://t.me/deathguard';
export const github = 'https://github.com/Ragna13377';
export const resumeFileName = 'Resume';

export const emptyPosition = { x: 0, y: 0 };

export const aboutMe =
	'Я увлеченный и внимательный к деталям инженер-программист. Ищу должность начального уровня в компании, чтобы использовать свои навыки для устранения сложных проблем и оказании помощи в своевременном завершении проектов.';
export const hobby =
	'В свободное время люблю кататься на велосипеде, играть в настольные игры и собирать модели из пластика.';
export const education =
	'НГТУ им. Р.Е. Алексеева, Радиолокационные системы и комплексы. СПбУТУиЭ Прикладная информатика';
export const experience: TTextBlock[] = [
	{
		date: '2023-2024',
		title: 'Think Studio',
		description:
			'Реализован веб-сервис поиска работы с помощью MondoDB, React и Bootstrap. Интегрировал аутентификацию пользователей с приложениями Github Oauth2.',
	},
	{
		date: '2022-2023',
		title: 'АЛАБУГА',
		description:
			'Завершил разработку веб-сайта компании с использованием React, Typescript. Автоматизировал развертывание системы с помощью Docker, Nginx в облаке Amazon',
	},
	{
		date: '2020-2022',
		title: 'Фриланс',
		description:
			'Работал с legacy-кодом, jQuery и AJAX-запросами. Оптимизировал время загрузки сайтов, переносил существующие проекты на React + Redux.',
	},
];
export const skills =
	'React, Redux, TypeScript, JavaScript, Jest, Cypress, Storybook, Webpack, Docker, Kubernetes, Git, Styled-Components';
