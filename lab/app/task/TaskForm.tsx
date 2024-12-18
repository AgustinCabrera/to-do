"use client";
import { useTaskContext } from '@/context/TaskContext';
import React, { useEffect, useState } from 'react'

const TaskForm = () => {
  const {tasks, addTask} = useTaskContext();
  const [user, setUser] = useState<Array<{id:number,name:string}>>([]);
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');

  useEffect(()=>{
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[]);

  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, date, userId }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (!response.ok) throw new Error('Error creating task');
          const newTask = await response.json()
            addTask(newTask)
    } catch (error) {
      console.error('Failed to create task:', error);
      alert('Failed to create task');
    }
    setTitle('');
    setDate('');
    setUserId('');
  
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">CREA UNA NUEVA TAREA</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Inserta tu título"
          required 
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <input 
          type="date" 
          value={date}
          onChange={(e)=> setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <select 
          value={userId}
          onChange={(e)=> setUserId(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
        >
          <option value="" disabled>Select a user</option>
          {user.map((user)=>(<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
