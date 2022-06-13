import {store} from '@/store';

export type ITodoList = Array<ITodo>;

export interface ITodo {
	id: number;
	content: string;
}
export interface ISliceTodo {
	status: string;
	todoList: Array<ITodo>;
}

