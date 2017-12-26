import * as React from 'react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps extends Todo {}
class TodoContainer extends React.Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
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
          {this.props.todos.map((todo) => <TodoContainer key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

export default App;
