import { EDIT_TODO } from '../constants/constants';

export const editTodoCreator = (name, editedName) => ({
  type: EDIT_TODO,
  name,
  editedName,
});
