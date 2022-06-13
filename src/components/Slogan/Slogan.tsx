import CardSVG from 'public/assets/desktop/isocard.svg';
import React from 'react';
import Image from 'next/image';

type Props = {};

const Slogan = (props: Props) => {
	return (
		<section className='text-[36px] font-extrabold my-14'>
			<div className='text-center'>
				<p>
					Earn <span className='text-purple-300'>More</span>
				</p>
				<p>Play Less</p>
				<button className='text-[20px] bg-purple-500 px-6 py-[6px] rounded-[14px] font-bold mt-[27px] hover:bg-pink-500 transition-all duration-300'>
					start
				</button>
			</div>
			<div className='mt-[69px]'>
				<Image src={CardSVG} alt='Credit card' />
			</div>
		</section>
	);
};

export default Slogan;
