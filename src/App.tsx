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

type TodoListStateProps = {
  todos: TodoData[];
};

const mapStateToTodoListProps = (state: AppState): TodoListStateProps => ({
  todos: state.todos,
});

type TodoListProps = TodoListStateProps;
const TodoList = connect(mapStateToTodoListProps)(
  ({todos}: TodoListProps) => (
    <ul>
      {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </ul>
  )
);

interface AppDispatchProps {
  addTodo: (text: string) => void;
}

const mapDispatchToAppProps = (dispatch: Dispatch<{}>): AppDispatchProps => ({
  addTodo: (text: string) => dispatch(todoActions.addTodo(text)),
});

type AppProps = AppDispatchProps;

const App = ({addTodo}: AppProps) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo('new todo');
    }
  };

  return (
    <div>
      <input onKeyDown={onKeyDown}/>
      <TodoList />
    </div>
  );
};

export default connect(null, mapDispatchToAppProps)(App);
