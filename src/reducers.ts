import { combineReducers } from 'redux';
import { ActionType, Action } from './actions';

export interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

const newTodoId = (state: TodoState[]): number =>
  state.length > 0 ? state[state.length - 1].id + 1 : 0;

const todos = (state: TodoState[] = [], action: Action): TodoState[] => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: newTodoId(state),
          text: action.payload.text,
          done: false,
        }
      ];

    case ActionType.TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.payload.id ? todo : {
        ...todo,
        done: !todo.done,
      });

      case ActionType.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);

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
