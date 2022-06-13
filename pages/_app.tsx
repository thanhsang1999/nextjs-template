import axiosClient from '@/api/axiosClient';
import {EmptyLayout} from '@/components/layout';
import {ThemeProvider} from '@/contexts';
import {AppPropsWithLayout} from '@/modules';
import {store} from '@/store';
import '@/styles/main.scss';
import {Provider} from 'react-redux';
import {SWRConfig} from 'swr';

function MyApp({Component, pageProps}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Provider store={store}>
			<ThemeProvider>
				<SWRConfig
					value={{
						fetcher: (url) => axiosClient.get(url),
						shouldRetryOnError: false,
					}}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
