import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const tasks = useTasks()
  const dispatch = useTasksDispatch()
  if (tasks === null || dispatch === null) {
    return (
      <div>initial error</div>
    )
  }
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: tasks[tasks.length - 1].id ++,
          text: text
        })
      }}>Add</button>
    </>
  )
}
