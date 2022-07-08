import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
  return store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
