import { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer.js';

const reducers = combineReducers({
  todoReducer,
});

const store = createStore(reducers);

export default store;
