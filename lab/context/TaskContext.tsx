'use client';

import { createContext , ReactNode, useContext, useEffect, useState} from "react";

type Task = {
  id: number;
  title: string;
  date: string;
  user: {id: number; name: string}
}
type TaskContextType = {
  tasks: Task[],
  fetchTasks:() => Promise<void>
  addTask:(task: Task) => void
  removeTask:(id: number) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({children}:{children:ReactNode}) =>{
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () =>{
    try {
      const res = await fetch("/api/tasks")
      if(!res.ok){
        throw new Error("Error fetching tasks")
      }
      const data = await res.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks: ',error)
      
    }
  }
  const addTask = (task:Task) =>{
    setTasks((prevTasks) => [...prevTasks, task])
  }
  const removeTask = (id: number) =>{
    setTasks((prevTasks) => prevTasks.filter((task) => task.id === id))
  }

  useEffect(() =>{
    fetchTasks()
  },[]);
  return (
    <TaskContext.Provider value={{tasks,fetchTasks,addTask,removeTask}}>
      {children}
    </TaskContext.Provider>
  )
}
export const useTaskContext = () =>{
  const context = useContext(TaskContext)
  if(!context){
    throw new Error("Use context must be used within a task provider")
  }
  return context
}