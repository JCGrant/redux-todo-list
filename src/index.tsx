import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
  todos: [
    {
      id: 0,
      text: 'wash dishes',
      done: false,
    },
    {
      id: 1,
      text: 'write down thoughts',
      done: false,
    },
    {
      id: 2,
      text: 'buy flowers for girlfriend',
      done: true,
    },
  ]
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App todos={initialState.todos}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
