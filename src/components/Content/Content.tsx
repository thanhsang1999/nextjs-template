import React from 'react';
import {FaUser} from 'react-icons/fa';

type Props = {};

const Content = (props: Props) => {
	return (
		<section className='flex justify-center'>
			<div className='flex flex-col w-[300px] 
            bg-purple-600 text-2xl gap-y-10 py-10 rounded-lg
            shadow-md
            '>
				<div className='flex gap-5 justify-center'>
					<FaUser className='' />
					<p>2022</p>
				</div>
				<div className='flex justify-center gap-5'>
					<FaUser className='' />
					<p>2022</p>
				</div>
			</div>
		</section>
	);
};

export default Content;
