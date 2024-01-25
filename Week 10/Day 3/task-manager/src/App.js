// App.js
import React from 'react';
import { TaskProvider } from './components/TaskProvider';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    // Step 9: Wrap the entire app with the TaskProvider
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <hr />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;