// redux and persistReducer stuffs
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers

import todoReducer from '../reducers/todoReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todo'],
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);
