import type { Meta, StoryObj } from '@storybook/react';
import ContextMenuItem from './index';
import { downloadFile } from '@shared/utils';
import { resumeFileName } from '@shared/constants';

const meta = {
	title: 'entities/ContextMenuItem',
	component: ContextMenuItem,
} satisfies Meta<typeof ContextMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicContextMenuItem: Story = {
	args: {
		children: 'Открыть',
		onClick: () => {
		},
	},
};
export const DownloadContextMenuItem: Story = {
	args: {
		children: 'Скачать pdf',
		onClick: () => downloadFile(resumeFileName, 'pdf'),
	},
};