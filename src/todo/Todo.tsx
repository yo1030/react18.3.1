// App.tsx
import React from 'react';
import TodoList from './TodoList';

export const Todo: React.FC = () => {
  return (
    <div>
      <h1>TODO アプリ</h1>
      <TodoList />
    </div>
  );
};
