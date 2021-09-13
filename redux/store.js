import { createStore, applyMiddleware } from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import middleWare from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(middleWare)
  );
  return store;
};


// export an assembled wrapper
export const wrapper = createWrapper(configureStore);

