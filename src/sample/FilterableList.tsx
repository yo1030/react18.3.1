import React, { useState } from 'react';
import { foods, filterItems, FoodType } from './filterItems';

export const FilterableList = () => {
  const [query, setQuery] = useState<string>('')
  const results = filterItems(foods, query)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange}/>
      <hr />
      <List items={results} />
    </>
  );
}

interface SearchBarProps {
  query: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}
function SearchBar({query, onChange}: SearchBarProps) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

interface ListProps {
  items: FoodType[]
}

function List({ items }: ListProps) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
