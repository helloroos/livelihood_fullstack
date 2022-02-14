import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// GLOBAL STATE
// an object that holds the application state / store
// any component in the app can access by connect method
const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)); // dev
    // applyMiddleware(thunk)); // prod
  return store;
};

export default configureStore;