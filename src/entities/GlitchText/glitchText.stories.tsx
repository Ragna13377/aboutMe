import type { Meta, StoryObj } from '@storybook/react';
import GlitchText from './index';

const meta = {
	title: 'entities/GlitchText',
	component: GlitchText,
} satisfies Meta<typeof GlitchText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicGlitchText: Story = {
	args: {
		children: 'Hello world!',
	},
};