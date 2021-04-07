import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
} from '../constants/todoConstant';

const initialState = {
  todos: [],
  todoError: null,
  todoLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case ADD_TODO_LOADING:
      return {
        ...state,
        todoLoading: action.payload,
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        todoError: action.payload,
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id ? {...item, taskCompleted: true} : item,
        ),
      };

    default:
      return state;
  }
}
