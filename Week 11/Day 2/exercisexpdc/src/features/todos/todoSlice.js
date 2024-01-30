import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    completeTodo: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    delTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, completeTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;
