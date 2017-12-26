import * as React from 'react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface AppProps {
  todos: Todo[];
}
class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
