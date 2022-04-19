import {AdminLayout} from '@/components/layout';
import {useLang} from '@/hooks';
import {NextPageWithLayout} from '@/modules';

const Abc: NextPageWithLayout = () => {
	const dataLang = useLang();
	return (
		<>
			<div className='flex'>{dataLang.home.title}</div>
		</>
	);
};
Abc.Layout = AdminLayout;
export default Abc;
