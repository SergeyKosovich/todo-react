import React from 'react';
import AddTodoContainer from '../components/addTodo/addTodoContainer';
import EditTodoContainer from '../components/editTodo/editTodoContainer';
import { Routes, Route } from 'react-router-dom';
import classes from './ContentWrapper.module.css';

const ContentWrapper = () => {
  return (
    <div className={classes.content_wrapper}>
      <Routes>
        <Route path='/' exact element={<AddTodoContainer />} />
        <Route path='/editTodo' exact element={<EditTodoContainer />} />
      </Routes>
    </div>
  );
};
export default ContentWrapper;
