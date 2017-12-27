import { combineReducers } from 'redux';
import { TodoData } from './App';

enum ActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

interface AddTodo {
  type: ActionType.ADD_TODO;
  payload: {
    text: string;
  };
}

interface ToggleTodo {
  type: ActionType.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export const todoActions = {
  addTodo: (text: string): AddTodo => ({
    type: ActionType.ADD_TODO,
    payload: {
      text,
    },
  }),

  toggleTodo: (id: number): ToggleTodo => ({
    type: ActionType.TOGGLE_TODO,
    payload: {
      id,
    },
  }),
};

type Action =
  | AddTodo
  | ToggleTodo
  ;

interface TodoState extends TodoData {}

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
