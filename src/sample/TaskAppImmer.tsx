import { useState } from 'react';
import { produce, Draft } from 'immer';
import { AddTodo } from './AddTodo';
import { TaskList } from './TaskList';

interface TodoType {
  id: number,
  title: string,
  done: boolean
}

const initialTodos: TodoType[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export const TaskAppImmer = () => {
  const [todos, setTodos] = useState<TodoType[]>(
    initialTodos
  );

  function handleAddTodo(title: string): void {
    setTodos(produce(todos, (draft: Draft<TodoType[]>) => {
      draft.push({
        id: todos[todos.length - 1].id++,
        title: title,
        done: false
      });
    }))
  }

  function handleChangeTodo(nextTodo: TodoType):void {
    setTodos(produce(todos, (draft: Draft<TodoType[]>) => {
      const todo = draft.find(todo => todo.id === nextTodo.id)
      if (todo !==undefined) {
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;
      }
    }))
  }

  function handleDeleteTodo(todoId: number): void {
    setTodos(produce(todos, (draft: Draft<TodoType[]>) => {
      draft.filter(todo => todo.id !== todoId)
    }))
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
