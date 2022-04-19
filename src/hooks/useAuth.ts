import {authApi} from '@/api';
import {PayloadLogin, IUseAuth} from '@/modules';
import useSWR from 'swr';
import {PublicConfiguration} from 'swr/dist/types';

export const useAuth = (option?: Partial<PublicConfiguration>): IUseAuth => {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 3600,
		revalidateOnFocus: false,
		...option,
	});

	const firstLoading = profile === undefined && error === undefined;

	async function login(payload: PayloadLogin) {
		await authApi.login(payload);
		await mutate();
	}

	async function logout() {
		await authApi.logout();
		mutate({}, false);
	}
	async function getProfile() {
		mutate();
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
		getProfile,
	};
};
