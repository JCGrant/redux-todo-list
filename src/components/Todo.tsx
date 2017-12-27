import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TodoState } from '../reducers';
import { todoActions } from '../actions';

interface OwnProps extends TodoState {}
interface DispatchProps {
  toggle: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch<{}>, {id}: OwnProps): DispatchProps => ({
  toggle: () => dispatch(todoActions.toggleTodo(id)),
});

type TodoProps = OwnProps & DispatchProps;
const Todo = ({text, done, toggle}: TodoProps) => (
  <span
    style={{textDecoration: done ? 'line-through' : 'none'}}
    onClick={toggle}
  >
    {text}
  </span>
);

export default connect(null, mapDispatchToProps)(Todo);
