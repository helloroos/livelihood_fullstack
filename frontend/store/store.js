import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger));
    applyMiddleware(thunk));
  return store;
};

export default configureStore;