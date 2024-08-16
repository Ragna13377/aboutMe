import type { Preview } from '@storybook/react';
import '../src/shared/styles/global.scss';
import React from 'react';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				width: '100%',
				margin: 0,
				padding: 0,
				backgroundColor: '#9d9d9d' }}>
				<Story />
			</div>
		)
	]
};

export default preview;
