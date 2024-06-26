import { useState } from 'react';

interface AddTodoProps {
  onAddTodo: (todo: string) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
