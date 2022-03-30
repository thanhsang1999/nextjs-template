import { useLang } from '@/hooks';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const dataLang = useLang();
  return (
      <>
      <div className='flex'>{dataLang.home.title}</div>
    </>
  );
};

export default Home;
