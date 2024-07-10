let nextId = 0;
let calls = 0;

export function getVisibleTodos(todos: TodoType[], showActive: boolean) {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

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
