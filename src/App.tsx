import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, todoActions } from './reducers';

export interface TodoData {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps extends TodoData {
  toggle: () => void;
}
const Todo = ({text, done, toggle}: TodoProps) => (
  <li
    style={{textDecoration: done ? 'line-through' : 'none'}}
    onClick={toggle}
  >
    {text}
  </li>
);

interface TodoListProps {
  todos: TodoData[];
  toggleTodo: (id: number) => () => void;
}
const TodoList = ({todos, toggleTodo}: TodoListProps) => (
  <ul>
    {todos.map((todo) => <Todo key={todo.id} {...todo} toggle={toggleTodo(todo.id)} />)}
  </ul>
);

interface AppStateProps {
  todos: TodoData[];
}
const mapStateToProps = (state: AppState): AppStateProps => state;

interface AppDispatchProps {
  toggleTodo: (id: number) => () => void;
}
const mapDispatchToProps = (dispatch: Dispatch<{}>): AppDispatchProps => ({
 toggleTodo: (id: number) => () => dispatch(todoActions.toggleTodo(id)),
});

type AppProps = AppStateProps & AppDispatchProps;
const App = ({todos, toggleTodo}: AppProps) => (
  <div>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
