import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  EDIT_OPEN,
  EDIT_CLOSE,
} from '../constants/constants';

const initialState = {
  todo: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todoId = state.todo.findIndex((todo) => todo.name === action.name);
      if (todoId === -1) {
        return {
          ...state,
          todo: [...state.todo, { name: action.name, enabled: false }],
        };
      }
      return state;
    }

    case REMOVE_TODO: {
      const updatedTodo = [...state.todo];
      const todoId = updatedTodo.findIndex((todo) => todo.name === action.name);
      updatedTodo.splice(todoId, 1);
      return {
        ...state,
        todo: [...updatedTodo],
      };
    }

    case EDIT_TODO: {
      const updatedTodo = [...state.todo];
      const todoId = updatedTodo.findIndex((todo) => todo.name === action.name);
      updatedTodo[todoId].name = action.editedName;
      return {
        ...state,
        todo: [...updatedTodo],
      };
    }

    case EDIT_OPEN: {
      const updatedTodo = [...state.todo];
      const todoId = updatedTodo.findIndex((todo) => todo.name === action.name);
      updatedTodo[todoId].enabled = true;
      return {
        ...state,
        todo: [...updatedTodo],
      };
    }

    case EDIT_CLOSE: {
      const updatedTodo = [...state.todo];
      const todoId = updatedTodo.findIndex((todo) => todo.name === action.name);
      updatedTodo[todoId].enabled = false;
      return {
        ...state,
        todo: [...updatedTodo],
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
