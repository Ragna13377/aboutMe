import type { Meta, StoryObj } from '@storybook/react';
import Technology from './index';

const meta = {
	title: 'entities/Technology',
	component: Technology,
} satisfies Meta<typeof Technology>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TechnologyWithoutHref: Story = {
	args: {
		type: 'react',
	},
};

export const TechnologyWithHref: Story = {
	args: {
		type: 'storybook',
		href: 'https://storybook.js.org/',
	},
};