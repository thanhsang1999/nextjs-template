import {ITodoList} from '@/modules';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectorTodoList} from '../redux/todoSelector';

const TodoList = () => {
	const todoList: ITodoList = useSelector(selectorTodoList);
  console.log(todoList);
  
	return (
		<>
			{Array.from(todoList).map((item, index) => {
				return <p key={index}>{item.content}</p>;
			})}
		</>
	);
};

export default React.memo(TodoList);
