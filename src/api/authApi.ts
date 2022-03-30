import {PayloadLogin} from '@/modules';
import axiosClient from './axiosClient';

export const authApi = {
	login(payload: PayloadLogin) {
		return axiosClient.post('/login', payload);
	},
	logout() {
		return axiosClient.post('/logout');
	},
	getProfile() {
		return axiosClient.get('/profile');
	},
};
