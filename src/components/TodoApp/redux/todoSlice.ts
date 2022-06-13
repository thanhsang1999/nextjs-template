import {ISliceTodo} from '@/modules';
import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		status: 'idle',
		todoList: [],
	} as ISliceTodo,
	reducers: {
		addTodo(state, action) {
			state.todoList.push(action.payload);
		},
	},
});
