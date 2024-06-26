import React, { useState } from 'react';
import { TaskProps } from './TaskApp';

interface TaskListProps {
  todos: TaskProps[],
  onChangeTodo: (task: TaskProps) => void,
  onDeleteTodo: (id: number) => void
}

export const TaskList: React.FC<TaskListProps> = ({
  todos,
  onChangeTodo,
  onDeleteTodo
}) =>{
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

interface TaskComponentProps {
  todo: TaskProps,
  onChange: (task: TaskProps) => void,
  onDelete: (id: number) => void
}

function Task({ todo, onChange, onDelete }: TaskComponentProps) : JSX.Element{
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}
