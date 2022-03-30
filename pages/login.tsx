import {authApi} from '@/api';
import * as React from 'react';

export default function Login() {
	async function handleLogin() {
		try {
			await authApi.login({
				username: 'sang',
				password: '123123',
			});
		} catch (error) {
			console.log('failed to login', error);
		}
	}
	async function handleLogout() {
		try {
			await authApi.logout();
		} catch (error) {
			console.log('failed to logout', error);
		}
	}
	async function handleGetProfile() {
		try {
			const info = await authApi.getProfile();
			console.log(info);
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}
	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<button onClick={handleGetProfile}>Get Profile</button>
		</div>
	);
}
