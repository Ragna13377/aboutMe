import { aboutMe, education, experience, hobby, skills } from '@shared/constants';

export const consoleTextBlock = experience.concat(
	{
		title: 'Навыки',
		description: skills,
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
	}
);
