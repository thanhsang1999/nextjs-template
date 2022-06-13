import {IInputText} from '@/modules';
import React, {useState} from 'react';
type Props = {
	value: string;
	onChangValue: Function;
};
export const InputTodo = (props: Props) => {
	const {value = '', onChangValue} = props;
	function handleOnChangeText(e: IInputText) {
		if (onChangValue) onChangValue(e);
	}
	return (
		<input
			className='
            border-2 
            border-gray-400 
            focus:border-sky-300
            h-[40px] 
            justify-center 
            mt-[10px]             
            mx-auto flex 
            outline-none
            pl-[10px]
            placeholder:text-slate-400
            rounded-lg             
            w-[215px] 
            '
			type='text'
			value={value}
			placeholder='pls input'
			onChange={handleOnChangeText}
		/>
	);
};
