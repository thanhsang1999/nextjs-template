import React from 'react';
import {BsFillSunFill} from 'react-icons/bs';
import {HiOutlineMenu} from 'react-icons/hi';

const NavBar = () => {
	return (
		<nav className='flex items-center'>
			<div className='flex items-center'>
				<div className='text-[20px] font-bold mr-2'>Favor</div>
				<BsFillSunFill className='text-[24px] text-yellow-300 cursor-pointer' />
			</div>
			<ul className='ml-auto text-[16px] font-semibold'>
				<HiOutlineMenu className='cursor-pointer text-[24px]'/>
			</ul>
		</nav>
	);
};

export default NavBar;
