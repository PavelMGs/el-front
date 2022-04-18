import { applyMiddleware, createStore, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootSaga from './sagas';
import rootReducer from './reducers';

// eslint-disable-next-line @typescript-eslint/ban-types
export type RootState = {};

interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
