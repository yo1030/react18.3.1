import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

export const TasksContext = createContext<TaskType[] | null>(null)
export const TasksDispatchContext = createContext<Dispatch<ActionType> | null>(null)

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
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

export function tasksReducer(tasks: TaskType[], action: ActionType): TaskType[] {
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

type TasksProviderProps = {
  children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        { children }
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export type TaskType = {
  id: number,
  text: string,
  done: boolean
}

const initialTasks: TaskType[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
