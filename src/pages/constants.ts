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
