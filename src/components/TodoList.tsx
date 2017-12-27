import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, TodoState, todoActions } from '../reducers';
import Todo from './Todo';

type StateProps = {
  todos: TodoState[];
};
const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
});

type DispatchProps = {
  deleteTodo: (id: number) => void;
};
const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => ({
  deleteTodo: (id: number) => dispatch(todoActions.deleteTodo(id)),
});

type TodoListProps = StateProps & DispatchProps;
const TodoList = ({todos, deleteTodo}: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
          <button onClick={() => deleteTodo(todo.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
