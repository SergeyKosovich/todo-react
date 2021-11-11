import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoCreator } from '../../actions/removeTodoCreator';
import { editTodoCreator } from '../../actions/editTodoCreator';
import { openForEditCreator } from '../../actions/openForEditCreator';
import { closeForEditCreator } from '../../actions/closeForEditCreator';
import EditButton from './buttons/editButton';
import classes from './editTodoContainer.module.css';

const EditTodoContainer = () => {
  const todo = useSelector((state) => {
    return state.todoReducer.todo;
  });
  const dispatch = useDispatch();
  const removeTodo = (e) => {
    dispatch(removeTodoCreator(e.target.id));
  };
  const editTodo = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(editTodoCreator(e.target[1].id, e.target[1].value));
  };
  const openTodoForEdit = (e) => {
    dispatch(openForEditCreator(e.target.id));
  };
  const closeTodoForEdit = (e) => {
    dispatch(closeForEditCreator(e.target.id));
  };
  return (
    <div>
      <h2 className={classes.h2_todo_list}>Todo List</h2>
      {todo.map((todo) => {
        const onClick = todo.enabled ? closeTodoForEdit : openTodoForEdit;
        const text = todo.enabled ? 'save' : 'edit';
        return (
          <form
            className={classes.todo_wrapper}
            key={`form${todo.name}`}
            onSubmit={editTodo}
          >
            <EditButton
              onClick={removeTodo}
              name={todo.name}
              className={classes.delete_button}
              text='delete'
            />
            <input
              type='text'
              defaultValue={todo.name}
              id={todo.name}
              disabled={!todo.enabled}
              className={classes.todo_input}
            />
            <EditButton
              onClick={onClick}
              name={todo.name}
              className={classes.edit_button}
              text={text}
            />
          </form>
        );
      })}
    </div>
  );
};
export default EditTodoContainer;
