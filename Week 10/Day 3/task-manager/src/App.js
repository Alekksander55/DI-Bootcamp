import React, { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const initialTodos = [
  {
    id: uuidv4(),
    task: "Dishes",
    complete: true,
  },
  {
    id: uuidv4(),
    task: "Laundry",
    complete: false,
  },
  {
    id: uuidv4(),
    task: "Do 1h running",
    complete: false,
  },
];

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      throw new Error();
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "DEL_TODO":
      return state.filter((todo) => todo.id != action.id);
    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, task: action.task };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    default:
      throw new Error();
  }
};

export const TodoContext = createContext(null);

function App() {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }
    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <div className="App">
        <h1>Todos app</h1>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
