import classes from './addTodoContainer.module.css';

const AddTodoContainer = () => {
  const addTodo = (e) => {
    e.preventDefault();
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
