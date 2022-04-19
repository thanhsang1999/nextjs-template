import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {};

function HeaderDesktop({}: Props) {
	return (
		<div className='bg-blue-100 w-full h-10'>
			<FontAwesomeIcon icon={faBars} className="text-left inline-block" />
			<FontAwesomeIcon icon={faHome} className="text-center inline-block ml-auto" />
		</div>
	);
}

export default HeaderDesktop;
