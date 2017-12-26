import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = [
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
    done: false,
  },
];

ReactDOM.render(
  <App todos={initialState}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
