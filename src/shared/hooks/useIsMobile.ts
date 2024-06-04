import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { throttle } from '@shared/utils';

export const useIsMobile = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const handleResize = () => {
			console.log(1);
			if (window.innerWidth <= 1200) navigate('/mobile');
			else navigate('/');
		};
		const optimizedResize = throttle(handleResize, 500);
		handleResize();
		window.addEventListener('resize', optimizedResize);
		return () => window.removeEventListener('resize', optimizedResize);
	}, [navigate]);
};
