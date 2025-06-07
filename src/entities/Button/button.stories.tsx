import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './index';

const meta = {
	title: 'entities/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveButton: Story = {
	args: {
		text: 'Click',
		appState: 'active',
		onClick: () => {},
	},
};
export const ErrorButton: Story = {
	args: {
		text: 'Click',
		appState: 'error',
		onClick: () => {},
	},
};
