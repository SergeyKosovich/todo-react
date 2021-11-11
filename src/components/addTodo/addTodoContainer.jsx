import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoCreator } from '../../actions/addTodoCreator';
import classes from './addTodoContainer.module.css';

const AddTodoContainer = () => {
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTodoCreator(e.target.elements[0].value));
    e.target.elements[0].value = '';
  };
  return (
    <div>
      <h2 className={classes.add_todo_h2}>Add todo</h2>
      <form action='#' onSubmit={addTodo}>
        <input type='text' className={classes.add_todo_input} />
        <button className={classes.add_todo_button}>add todo</button>
      </form>
    </div>
  );
};
export default AddTodoContainer;
