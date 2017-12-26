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

interface TodoListProps {
  todos: Todo[];
}
class TodoList extends React.Component<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <TodoContainer key={todo.id} {...todo} />)}
      </ul>
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
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App;
