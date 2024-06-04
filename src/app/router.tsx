import { createHashRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Mobile from '@pages/Mobile';
import CheckResolution from '@pages/CheckResolution';

export const router = createHashRouter([
	{
		path: '*',
		element: <CheckResolution />,
	},
	{
		path: '/AboutMe',
		element: <Home />,
	},
	{
		path: '/mobile',
		element: <Mobile />,
	},
]);
