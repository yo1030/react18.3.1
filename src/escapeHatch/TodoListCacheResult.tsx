import { useMemo, useState } from 'react';
import { initialTodos, createTodo, getVisibleTodos, TodoType } from './todosCacheResult';

export default function TodoListCacheResult() {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const visibleTodos: TodoType[] = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
      <ul style={{
        listStyle: 'none'
      }}>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
