import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

type TodoType = {
  id: number,
  text: string
}

export default function TodoListFocus() {
  const listRef = useRef<HTMLUListElement>(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoType[]>(
    initialTodos
  );

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText('');
      setTodos([ ...todos, newTodo]);
    })
    if (listRef.current && listRef.current.lastChild) { 
      (listRef.current.lastChild as HTMLLIElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

  return (
    <div>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

let nextId = 0;
let initialTodos : TodoType[]= [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  });
}
