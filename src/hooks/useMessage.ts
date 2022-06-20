import {en, vi} from '@/utils/lang';
import {useEffect, useRef, useState} from 'react';

export const useMessage = () => {
	const [dataLang, setDataLang] = useState(() => ({
		data: en,
		lang: 'en',
	}));
	useEffect(() => {
		const tmpLang = localStorage.getItem('lang') || 'en';
		if (tmpLang === 'en') return;
		setDataLang({data: vi, lang: 'vi'});
	}, []);

	function handleChangeLang() {
		const tmpLang = dataLang.lang === 'en' ? 'vi' : 'en';
		setDataLang({
			data: dataLang.lang === 'en' ? vi : en,
			lang: tmpLang,
		});
		localStorage.setItem('lang', tmpLang);
	}

	return {
		dataLang: dataLang.data,
		setDataLang: handleChangeLang,
	};
};
