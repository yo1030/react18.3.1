let nextId = 0;

export function createTodo(text: string, completed: boolean = false) {
  return {
    id: nextId++,
    text,
    completed
  };
}

export type TodoType = {
  id: number,
  text: string,
  completed: boolean
}

export const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
