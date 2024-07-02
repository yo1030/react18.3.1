import { useState } from 'react';
import { TaskType, useTasks, useTasksDispatch } from './TaskContext';

export default function TaskList() {
  const tasks = useTasks()
  const dispatch = useTasksDispatch()
  if (tasks === null || dispatch === null) {
    return (
      <div>initial error</div>
    )
  }
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

type TaskProps = {
  task: TaskType
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()
  if (dispatch === null) {
    return (
      <div>initial error</div>
    )
  }
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange = {e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              text: e.target.value
            }
          })
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        })
      }}>
        Delete
      </button>
    </label>
  );
}
