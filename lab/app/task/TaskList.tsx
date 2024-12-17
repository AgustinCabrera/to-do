'use client';
import React, { useEffect, useState } from 'react'


const TaskList = () => {
const [tasks,setTask] =  useState<Array<{id:string,title:string, user:{name:string}}>>([]);

const handleDelete = async(e:any) =>{
  try {
    const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  
    if (!response.ok) throw new Error('Error deleting task');
  
    setTask((prev) => prev.filter((task) => task.id !== id));
  } catch (error) {
    console.error('Failed to delete task:', error);
    alert('Failed to delete task');
  }
}


  return (
    <div>
      <h1>LISTA DE TAREAS</h1>
      <div className='space-y-4'>
        {tasks.map((task) => (
          <div
          key={task.id}
          className='flex items-center justify-between'
          >
            <div>
              <p>{task.title}</p>
              <p>Assigned to: {task.user.name}</p>
            </div>
            <button onClick={() => handleDelete(task.id)} className='color-red'> 
                DELETE
            </button>
          </div>
          
        ))}
      </div>
      </div>
  );
}

export default TaskList
