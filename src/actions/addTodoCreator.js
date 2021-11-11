import { ADD_TODO } from '../constants/constants';

export const addTodoCreator = (text) => ({ type: ADD_TODO, name: text });
