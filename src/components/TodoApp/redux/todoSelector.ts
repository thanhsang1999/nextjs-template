import {typeStore} from '@/modules';

export const selectorTodoList = (state: typeStore) => state.todo.todoList;
