import axiosClient from '@/api/axiosClient';
import {EmptyLayout} from '@/components/layout';
import {AppPropsWithLayout} from '@/modules';
import '@/styles/main.scss';
import {SWRConfig} from 'swr';

function MyApp({Component, pageProps}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<SWRConfig
			value={{
				fetcher: (url) => axiosClient.get(url),
				shouldRetryOnError: false,
			}}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}

export default MyApp;
