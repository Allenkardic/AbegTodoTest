import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
} from '../constants/todoConstant';

export const addTodo = data => {
  return async dispatch => {
    try {
      dispatch({type: ADD_TODO_LOADING, payload: true});
      dispatch({type: ADD_TODO_SUCCESS, payload: data});
      dispatch({type: ADD_TODO_LOADING, payload: false});

      alert('Task successfuly added');
    } catch (error) {
      dispatch({type: ADD_TODO_ERROR, payload: error});
    }
  };
};

export const updateTodo = id => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_TODO_SUCCESS,
        payload: {
          id: id,
          taskCompleted: true,
        },
      });
    } catch (error) {
      dispatch({type: UPDATE_TODO_ERROR, payload: error});
    }
  };
};
