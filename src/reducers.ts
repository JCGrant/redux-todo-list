import { combineReducers } from 'redux';
import { TodoData } from './App';

interface TodoState extends TodoData {}

const todos = (state: TodoState[] = []) => {
  return state;
};

export interface AppState {
  todos: TodoState[];
}

export default combineReducers({
  todos,
});
