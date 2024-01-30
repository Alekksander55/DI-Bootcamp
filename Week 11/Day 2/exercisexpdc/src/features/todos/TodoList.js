import { useSelector, useDispatch } from "react-redux";
import { addTodo, delTodo, completeTodo } from "./todoSlice";
import { useState } from "react";

const TodoList = (props) => {
  const [text, setText] = useState();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <input
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo({ text }))}>Add Task</button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(completeTodo(todo.id))}
              />
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(delTodo(todo.id))}>-</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
