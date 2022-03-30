import {MainLayout} from '@/components/layout';
import {NextPageWithLayout} from '@/modules';
import * as React from 'react';

const About: NextPageWithLayout = () => {
	return (
		<>
			<h1>About Page</h1>
		</>
	);
};

About.Layout = MainLayout;
export default About;
