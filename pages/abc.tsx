import { AdminLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/modules';

const Abc: NextPageWithLayout = () => {
	return (
		<>
			<div className='flex'></div>
		</>
	);
};
Abc.Layout = AdminLayout;
export default Abc;
