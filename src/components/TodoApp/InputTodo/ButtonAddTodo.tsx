import React from 'react';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonAddTodo = (props: Props) => {
	const {onClick} = props;
	return (
		<button
			className='
                flex
                mx-auto
                bg-pink-300
                mt-3
                px-5
                py-2
                rounded-3xl
                justify-center'
			onClick={onClick}>
			Add
		</button>
	);
};
