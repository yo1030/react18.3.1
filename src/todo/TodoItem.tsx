// TodoItem.tsx
import React from 'react';

interface Todo {
  id: number;
  text: string;
}

export const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{todo.text}</span>
    </div>
  );
};