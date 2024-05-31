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
	'Ошибка при запуске приложения (0хс0000007b). Для выхода из приложения нажмите кнопку "OK".',
	// 'Точка входа в процедуру EventSetInformation не найдена в библиотеке DLL ADVAPI32.dll.',
	// 'Запуск программы невозможен, так как на компьютере отсутствует MSVCR71.dll. Попробуйте переустановить программу.',
	// 'Произошла ошибка при создании отчета об ошибках.',
];
