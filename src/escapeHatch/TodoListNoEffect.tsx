import { useState } from 'react';
import { initialTodos, createTodo, TodoType } from './todosNoEffect';

export default function TodoListNoEffect() {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);
  const activeTodos: TodoType[] = todos.filter(todo => !todo.completed);
  const visibleTodos: TodoType[] = showActive ? activeTodos : todos;

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
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul style={{listStyle: 'none'}}>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </div>
  );
}

type NewTodoType = {
  onAdd: (newTodo: TodoType) => void
}

function NewTodo({ onAdd }: NewTodoType) {
  const [text, setText] = useState<string>('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
}
