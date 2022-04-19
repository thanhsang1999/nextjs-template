import { AdminLayout } from '@/components/layout';
import { useLang } from '@/hooks';
import { NextPageWithLayout } from '@/modules';

const Admin: NextPageWithLayout = () => {
	return (
		<>
			<div className='flex'>Admin</div>
		</>
	);
};

Admin.Layout = AdminLayout;
export default Admin;
