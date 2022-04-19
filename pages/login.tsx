import {authApi} from '@/api';
import {useAuth} from '@/hooks';
import * as React from 'react';

export default function Login() {
	const {profile, login, logout, getProfile} = useAuth({
		revalidateOnMount: false,
	});
	async function handleLogin() {
		try {
			await login({
				username: 'sang',
				password: '123123',
			});
			console.log('redirect to dashboard');
		} catch (error) {
			console.log('failed to login', error);
		}
	}
	async function handleLogout() {
		try {
			await logout();
		} catch (error) {
			console.log('redirect to login');
		}
	}
	async function handleGetProfile() {
		try {
			await getProfile();
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}
	return (
		<div>
			<h1>Login Page</h1>
			<h2>${JSON.stringify(profile || {}, null, 4)}</h2>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<button onClick={handleGetProfile}>Get Profile</button>
		</div>
	);
}
