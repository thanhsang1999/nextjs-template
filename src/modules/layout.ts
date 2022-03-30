import {NextPage} from 'next';
import {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';

interface LayoutProps {
	children: ReactNode;
}

type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export type {LayoutProps, NextPageWithLayout, AppPropsWithLayout};
