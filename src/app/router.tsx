import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Mobile from '@pages/Mobile';

export const router = createBrowserRouter([
	{
		path: '*',
		element: <Home />,
	},
	{
		path: '/mobile',
		element: <Mobile />,
	},
]);
