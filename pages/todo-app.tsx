import {InputTodo, ButtonAddTodo, todoSlice} from '@/components/TodoApp';
import TodoList from '@/components/TodoApp/TodoList/TodoList';
import { useMessage } from '@/hooks';
import {IInputText} from '@/modules';
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

type Props = {};

const TodoApp = (props: Props) => {
	const {dataLang} = useMessage();
	const [inputTodo, setInputTodo] = useState('');
	const dispatch = useDispatch();
	const {addTodo} = todoSlice.actions;

	const handleClickAdd = () => {
		dispatch(
			addTodo({
				content: inputTodo,
			})
		);
	};

	function handleOnchangeValue(e: IInputText) {
		setInputTodo(e.target.value);
	}
	return (
		<article className='max-w-screen-lg mx-auto'>
			<div className='text-center'>
				<h1 className='text-xl font-bold'>{dataLang.TODO.title}</h1>
			</div>
			<InputTodo value={inputTodo} onChangValue={handleOnchangeValue} />
			<ButtonAddTodo onClick={handleClickAdd} />
			<TodoList />
		</article>
	);
};

export default TodoApp;
