import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from './reducers';

export interface TodoData {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps extends TodoData {}
const Todo = ({text, done}: TodoProps) => (
  <li style={{textDecoration: done ? 'line-through' : 'none'}}>{text}</li>
);

interface TodoListProps {
  todos: TodoData[];
}
const TodoList = ({todos}: TodoListProps) => (
  <ul>
    {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
  </ul>
);

interface AppStateProps {
  todos: TodoData[];
}
const mapStateToProps = (state: AppState): AppStateProps => state;

type AppProps = AppStateProps;
const App = ({todos}: AppProps) => (
  <div>
    <TodoList todos={todos} />
  </div>
);

export default connect(mapStateToProps)(App);
