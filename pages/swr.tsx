import {StudentSWR} from '@/components/swr';
import * as React from 'react';

export interface SWRProps {}

export default function SWR(props: SWRProps) {
	return (
		<div>
			<StudentSWR studentId='sktwi1cgkkuif36f7' />
			<StudentSWR studentId='sktwi1cgkkuif36f7' />
			<StudentSWR studentId='sktwi1cgkkuif36f7' />
		</div>
	);
}
