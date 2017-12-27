import { combineReducers } from 'redux';
import { TodoData } from './App';

enum ActionType {
  TOGGLE_TODO = 'TOGGLE_TODO',
}

interface ToggleTodo {
  type: ActionType.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export const todoActions = {
  toggleTodo: (id: number): ToggleTodo => ({
    type: ActionType.TOGGLE_TODO,
    payload: {
      id,
    },
  }),
};

type Action =
  | ToggleTodo
  ;

interface TodoState extends TodoData {}

const todos = (state: TodoState[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.payload.id ? todo : {
        ...todo,
        done: !todo.done,
      });
    default:
      return state;
  }
};

export interface AppState {
  todos: TodoState[];
}

export default combineReducers({
  todos,
});
