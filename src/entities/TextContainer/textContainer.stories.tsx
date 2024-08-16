import type { Meta, StoryObj } from '@storybook/react';
import TextContainer from './index';

const meta = {
	title: 'entities/TextContainer',
	component: TextContainer,
} satisfies Meta<typeof TextContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortTextContainer: Story = {
	args: {
		title: 'Title',
		children: 'Lorem ipsum dolor sit amet.'
	},
};
export const LongTextContainer: Story = {
	args: {
		title: 'Title',
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis consequat tortor. Vestibulum viverra sit amet lectus id tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ligula dolor, dignissim id sem eget, efficitur ultricies tortor. Praesent volutpat fermentum dolor a tristique. Vestibulum dictum risus id gravida porta. Nullam accumsan massa risus, ultrices hendrerit justo vulputate vel. Integer leo lacus, scelerisque vitae est a, convallis aliquam est. Praesent vel tincidunt ligula. Proin ligula metus, porta ut massa et, volutpat ullamcorper tortor. Duis mattis blandit tristique. Duis varius tempus est, id auctor metus lobortis mattis. Nulla aliquet lacus ac elit porta, a molestie eros finibus.'
	},
};