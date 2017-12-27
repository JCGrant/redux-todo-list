import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, todoActions } from './reducers';

export interface TodoData {
  id: number;
  text: string;
  done: boolean;
}

interface TodoOwnProps extends TodoData {}

interface TodoDispatchProps {
  toggle: () => void;
}
const mapDispatchToTodoProps = (dispatch: Dispatch<{}>, {id}: TodoOwnProps): TodoDispatchProps => ({
  toggle: () => dispatch(todoActions.toggleTodo(id)),
});

type TodoProps = TodoData & TodoDispatchProps;
const Todo = connect(null, mapDispatchToTodoProps)(
  ({text, done, toggle}: TodoProps) => (
    <li
      style={{textDecoration: done ? 'line-through' : 'none'}}
      onClick={toggle}
    >
      {text}
    </li>
  )
);

interface TodoListOwnProps {
  todos: TodoData[];
}

type TodoListStateProps = TodoListOwnProps;

const mapStateToTodoListProps = (state: AppState, ownProps: TodoListOwnProps): TodoListStateProps => ownProps;

type TodoListProps = TodoListStateProps;
const TodoList = connect(mapStateToTodoListProps)(
  ({todos}: TodoListProps) => (
    <ul>
      {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </ul>
  )
);

interface AppStateProps {
  todos: TodoData[];
}
const mapStateToAppProps = (state: AppState): AppStateProps => state;

type AppProps = AppStateProps;
const App = ({todos}: AppProps) => (
  <div>
    <TodoList todos={todos} />
  </div>
);

export default connect(mapStateToAppProps)(App);
