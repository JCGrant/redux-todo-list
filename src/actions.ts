export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO',
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

interface DeleteTodo {
  type: ActionType.DELETE_TODO;
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

  deleteTodo: (id: number): DeleteTodo => ({
    type: ActionType.DELETE_TODO,
    payload: {
      id,
    },
  }),
};

export type Action =
  | AddTodo
  | ToggleTodo
  | DeleteTodo
  ;
