import React from 'react';

interface PackingListProps {
  items: {
    id: number,
    packed: boolean,
    title: string
  }[],
  onChangeItem: Function,
  onDeleteItem: (id: number) => void
}

export const PackingList: React.FC<PackingListProps> = ({
  items,
  onChangeItem,
  onDeleteItem
}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label style={{ display: "inline"}}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
