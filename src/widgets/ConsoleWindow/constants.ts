import { ConsoleTextBlock } from '@widgets/ConsoleWindow/types';
import { aboutMe, education, hobby } from '@shared/constants';

export const experience: ConsoleTextBlock[] = [
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
			'Завершил разработку веб-сайта компании с импользованием React, Typescript. Автоматизировал развертывание системы с помощью Docker, Nginx в облаке Amazon',
	},
	{
		date: '2020-2022',
		title: 'Фриланс',
		description:
			'Работал с legacy-кодом, jQuery и AJAX-запросами. Оптимизировал время загрузки сайтов, переносил существующие проекты на React + Redux.',
	},
	{
		title: 'Навыки',
		description:
			'React, Redux, TypeScript, JavaScript, Jest, Cypress, Storybook, Webpack, Docker, Kubernetes, Git, Styled-Components',
	},
	{
		title: 'Образование',
		description: education,
	},
	{
		title: 'О себе',
		description: aboutMe,
	},
	{
		title: 'Хобби',
		description: hobby,
	},
];
