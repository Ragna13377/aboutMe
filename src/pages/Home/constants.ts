import { TTechnology } from '@shared/types';
import { email, github, telegram } from '@shared/constants';

export const stack: TTechnology[] = [
	{ type: 'react' },
	{ type: 'redux' },
	{ type: 'typeScript' },
	{ type: 'javaScript' },
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

export const errorsText = [
	'Запуск программы невозможен, так как на компьютере отсутствует MSVCR71.dll. Попробуйте переустановить программу.',
	'Инструкция по адресу "0x67b01bc1" обратилась к памяти по адресу "0x000000014". Память не может быть "written".',
	'Ошибка при запуске приложения (0хс0000007b). Для выхода из приложения нажмите кнопку "OK".',
	'?????????????? ?????? ? ????? ?????, ????? ????? ??? ????? ????.',
	'Произошла ошибка при создании отчета об ошибках.',
];
