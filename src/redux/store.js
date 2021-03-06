import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default {store, persistor};
