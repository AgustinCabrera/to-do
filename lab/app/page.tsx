import TaskForm from "./task/TaskForm";
import TaskList from "./task/TaskList";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <TaskForm />
      <TaskList />
    </div>
  );
}
