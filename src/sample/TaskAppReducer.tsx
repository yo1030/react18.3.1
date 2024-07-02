import AddTask from './AddTask';
import TaskList from './TaskList1';
import { TasksProvider } from './TaskContext';

export default function TaskAppReducer() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
