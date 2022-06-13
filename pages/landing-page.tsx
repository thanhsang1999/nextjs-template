import Content from '@/components/Content/Content';
import { EmptyLayout } from '@/components/layout';
import NavBar from '@/components/NavBar/NavBar';
import Slogan from '@/components/Slogan/Slogan';
import { NextPageWithLayout } from '@/modules';
import React from 'react';

const LandingPage: NextPageWithLayout = () => {
	return (
		<>
			<div
				className='font-sora
				h-screen 
				px-4
			 	py-8
				bg-gradient-to-b
				from-purple-900
				to-purple-700
				text-white
				overflow-auto
			'>
				<NavBar />
				<Slogan />
				<Content />
			</div>
		</>
	);
};
LandingPage.Layout = EmptyLayout;
export default LandingPage;
