import {LayoutProps} from '@/modules/Common/layoutModule';
import Link from 'next/link';
import * as React from 'react';
import {Authentication} from '../common';

export function AdminLayout({children}: LayoutProps) {
	return (
		<Authentication>
			<h1>Admin Layout</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<>{children}</>
		</Authentication>
	);
}
