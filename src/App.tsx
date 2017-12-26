import * as React from 'react';

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

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {initialState.map((todo) => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
