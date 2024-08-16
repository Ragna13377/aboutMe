import { TTextBlock } from '@shared/types';

export const email = 'mailto:godfrey.namco@gmail.com';
export const telegram = 'https://t.me/deathguard';
export const github = 'https://github.com/Ragna13377';
export const resumeFileName = 'Орлов Иван Дмитриевич';

export const emptyPosition = { x: 0, y: 0 };

export const aboutMe =
	'Разворачивал сайт на базе Express и MongoDB с использованием Docker. Имею опыт менторства. Знание английского на уровне чтения документаций.';
export const hobby =
	'В свободное время пишу пет-прокеты. Играю в настольный Warhammer 40k. Катаюсь на велосипеде. Собираю модели из пластика.';
export const education =
	'НГТУ им. Р.Е. Алексеева: Радиолокационные системы и комплексы. СПбуТУиЭ: Прикладная информатика';
export const experience: TTextBlock[] = [
	{
		date: 'июль 2023 - настоящее время',
		title: 'Эксор ЛТД',
		description:
			'Разработка веб-приложений. Реализовал пользовательский интерфейс конструктора настройки и проектирования фасада зданий. Разработал интерфейс взаимодействия между воспитателями и родителями для сети детских садов, включающий модули заметок, планирования и чаты. Технологии: React, Redux, TS, Websocket.',
	},
	{
		date: 'октябрь 2022 - июль 2023',
		title: 'MirTelecom',
		description:
			'Разработка сайта аренды серверов VPS/VDS. Реализовал собственный UI-kit, личный кабинет пользователя, интегрировал систему оплаты. Технологии: Vue, Vuex, Vuelidate, Webpack, Юкасса',
	},
	{
		date: 'апрель 2022 - август 2022',
		title: 'Индивидуальный заказчик',
		description:
			'Реализовал интерфейс магазина спортивного питания, включая визуализацию админ-панели. Интегрировал систему оплаты QIWIКасса на стороне бекенда и фронтенда. Подготовил подробную документацию по настройке и управлению сайтом. технологии: JS, jQuery. Laravel. Bootstrap. QIWIКасса',
	},
];
export const skills =
	'React, Redux, TypeScript, JavaScript, CSS, SCSS, HTML, Webpack, Gulp, Jest, Cypress, Storybook, Docker, Git, Material-UI, Bootstrap, i18n, FSD, REST API, Figma';
