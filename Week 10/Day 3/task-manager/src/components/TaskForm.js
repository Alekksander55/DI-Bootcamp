// TaskForm.js
import React, { useState } from 'react';
import { useTaskContext } from './TaskProvider';

const TaskForm = () => {
  // Step 7: Use the custom hook to access the context
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');

  // Step 8: Handle task addition
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = { id: Date.now(), text: newTask, completed: false };
      addTask(task);
      setNewTask(''); // Clear input field after adding task
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;