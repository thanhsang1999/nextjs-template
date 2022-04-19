import {LayoutProps} from '@/modules';
import Link from 'next/link';
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
