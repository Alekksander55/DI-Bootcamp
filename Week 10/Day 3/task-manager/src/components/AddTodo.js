import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from '../App';

const AddTodo = () => {
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleChangeInput = e => setTask(e.target.value);

  const handleSubmit = e => {
    if (task) {
      dispatch({ type: 'ADD_TODO', task, id: uuidv4() });
    }
    setTask('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChangeInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
