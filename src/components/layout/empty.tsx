import {LayoutProps} from '@/modules/layout';
import Link from 'next/link';
import * as React from 'react';

export function EmptyLayout({children}: LayoutProps) {
	return <>{children}</>;
}
