import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import * as reducer from '../reducer';

export default () => {
  const rootReducer = combineReducers({ ...reducer });
  const store = createStore(rootReducer, applyMiddleware(reduxThunk));
  return store;
};
