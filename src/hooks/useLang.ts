import { useRouter } from 'next/router';
import { en, vi } from 'public/lang';

export const useLang = () => {
  const { locale } = useRouter();
  return locale === 'vi' ? vi : en;
};
