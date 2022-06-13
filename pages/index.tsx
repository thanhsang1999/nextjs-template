import {MainLayout} from '@/components/layout';
import {ThemeContext} from '@/contexts';
import {useMessage} from '@/hooks';
import {NextPageWithLayout} from '@/modules';
import {memo, useContext} from 'react';

const Home: NextPageWithLayout = () => {
	const {dataLang, setDataLang} = useMessage();
	const {theme,toggleTheme} = useContext(ThemeContext);

	return (
		<>
			<div className='flex'>{dataLang.CONTENT}</div>
			<button onClick={setDataLang}>click me</button>
			<div className='flex'>{theme}</div>
			<button onClick={()=>toggleTheme()}>click me</button>
		</>
	);
};

Home.Layout = MainLayout;
export default memo(Home);
