import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList1';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: TaskType) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

type AddedAction = {
  type: 'added',
  id: number,
  text: string
}

type ChangedAction = {
  type: 'changed',
  task: TaskType
}

type DeletedAction = {
  type: 'deleted',
  id: number
}

type NoneAction = {
  type: ''
}

export type ActionType = AddedAction | ChangedAction | DeletedAction | NoneAction

function tasksReducer(tasks: TaskType[], action: ActionType): TaskType[] {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export type TaskType = {
  id: number,
  text: string,
  done: boolean
}

let nextId = 3;
const initialTasks: TaskType[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
