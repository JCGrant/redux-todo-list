import * as React from 'react';

interface TodoData {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps extends TodoData {}
const Todo = ({text}: TodoProps) => (
  <li>{text}</li>
);

interface TodoListProps {
  todos: TodoData[];
}
const TodoList = ({todos}: TodoListProps) => (
  <ul>
    {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
  </ul>
);

interface AppProps {
  todos: TodoData[];
}
const App = ({todos}: AppProps) => (
  <div>
    <TodoList todos={todos} />
  </div>
);

export default App;
