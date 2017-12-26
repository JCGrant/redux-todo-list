import * as React from 'react';

interface TodoData {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps extends TodoData {}
class Todo extends React.Component<TodoProps> {
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
  todos: TodoData[];
}
class TodoList extends React.Component<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <Todo key={todo.id} {...todo} />)}
      </ul>
    );
  }
}

interface AppProps {
  todos: TodoData[];
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
