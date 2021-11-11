import { REMOVE_TODO } from '../constants/constants';

export const removeTodoCreator = (text) => ({
  type: REMOVE_TODO,
  name: text,
});
