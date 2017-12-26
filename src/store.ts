import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { AppState } from './reducers';

declare global {
  interface Window {
    // tslint:disable-next-line:no-any
    __REDUX_DEVTOOLS_EXTENSION__: any;
    // tslint:disable-next-line:no-any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: AppState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
