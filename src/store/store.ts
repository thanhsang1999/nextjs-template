import {todoSlice} from '@/components/TodoApp';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	},
});
