'use client';
import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState<Array<{id:string,title:string,user:{name:string}}>>([]);

  useEffect(()=>{
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  },[]);

  const handleDelete = async (id:string) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">LISTA DE TAREAS</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-4 border border-gray-200 rounded-md shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-800">{task.title}</p>
              <p className="text-sm text-gray-600">asignada a {task.user.name}</p>
            </div>
            <button 
              onClick={() => handleDelete(task.id)} 
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
