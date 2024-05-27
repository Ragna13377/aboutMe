import { TTechnology } from '@shared/types';
import { email, github, telegram } from '@shared/constants';
import { ConsoleTextBlock } from '@widgets/ConsoleWindow/types';

export const stack: TTechnology[] = [
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
];

export const socials: TTechnology[] = [
	{ type: 'gmail', href: email },
	{ type: 'github', href: github },
	{ type: 'telegram', href: telegram },
];

export const experience: ConsoleTextBlock[] = [
	{
		date: '2020-2022',
		title: 'Фриланс',
		description:
			'Работал с legacy-кодом, jQuery и AJAX-запросами. Переносил существующие проекты на React + Redux.',
	},
	{
		date: '2022-2023',
		title: 'АЛАБУГА',
		description:
			'В одиночку занимался архитектурой и frontend частью проектов. Тестировал проекты на Jest, Cypress. Улучшал существующую кодовую базу проектов. Автоматизировал заполнение документооборота.',
	},
];
