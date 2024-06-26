import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TaskList } from './TaskList';

export interface TaskProps {
  id: number,
  title: string,
  done: boolean
}

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export const TaskApp = () => {
  const [todos, setTodos] = useState<TaskProps[]>(
    initialTodos
  );

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      } 
    ])
  }

  function handleChangeTodo(nextTodo: TaskProps) {
    setTodos(todos.map(t =>{
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
    }}))
  }

  function handleDeleteTodo(todoId: number): void {
    setTodos(todos.filter(t =>
      t.id !== todoId
    ))
  }

  return (
    <div>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
