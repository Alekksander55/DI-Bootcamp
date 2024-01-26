import React, { useContext, useState, useRef } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const myInput = useRef()

  const handleChange = () => {
    dispatch({
      id: todo.id,
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
    });
  };

  const[editing, setEditing] = useState(false)
  const handleEdit = () => {
    if (!editing) {
        setEditing(true)
        myInput.current.style.display = ''
    } else {
        setEditing(false)
        dispatch({
            id: todo.id,
            task: myInput.current.value,
            type: 'EDIT_TODO'
        })
        console.log(todo.id, 'edited')
        myInput.current.style.display = 'none'
    }
  };

  const handleDel = () => {
    dispatch({
        id: todo.id,
        type: "DEL_TODO",
      });
    };
  return (
    <ul>
      <li key={todo.id}>
        <label>
            <button onClick={handleDel}>X</button>
            <button onClick={handleEdit}>Edit</button>
            <input type="checkbox" checked={todo.complete} onChange={handleChange}/>
            {todo.task}
            <input type="text" ref={myInput} style={{display:'none'}}/>

        </label>
      </li>
    </ul>
  );
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;