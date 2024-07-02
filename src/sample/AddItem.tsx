import React, { useState } from 'react';

interface AddItemProps {
  onAddItem: (title: string) => void;
}

export const AddItem: React.FC<AddItemProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddItem(title);
      }}>Add</button>
    </>
  )
}
