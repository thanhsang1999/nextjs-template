import {useAuth} from '@/hooks';
import {ChildrenReact} from '@/modules';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

export function Authentication({children}: ChildrenReact) {
	const router = useRouter();
	const {profile, firstLoading} = useAuth();
	useEffect(() => {
		if (!firstLoading && !profile?.username) router.push('/login');
	}, [router, profile, firstLoading]);
	if (!profile?.username) return <div>Loading...</div>;
	return <div>{children}</div>;
}
