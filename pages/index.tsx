import { MainLayout } from '@/components/layout';
import { useLang } from '@/hooks';
import { NextPageWithLayout } from '@/modules';

const Home: NextPageWithLayout = () => {
	const dataLang = useLang();
	return (
		<>
			<div className='flex'>{dataLang.home.title}</div>
		</>
	);
};

Home.Layout = MainLayout;
export default Home;
