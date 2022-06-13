import { LayoutProps } from '@/modules';
import * as React from 'react';
import Header from '../common/header';

export function MainLayout({children}: LayoutProps) {
	return (
		<>
			<Header />
			<>{children}</>
		</>
	);
}
