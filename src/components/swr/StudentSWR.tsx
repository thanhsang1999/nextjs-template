import * as React from 'react';
import useSWR from 'swr';

export interface StudentSWRProps {
	studentId: string;
}

export const StudentSWR = ({studentId}: StudentSWRProps) => {
	const {data, error, isValidating, mutate} = useSWR(`/students/${studentId}`);
	return <div>Name : {data?.name || '--'}</div>;
};
