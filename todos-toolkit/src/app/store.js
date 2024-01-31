import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todos/todosSlice";
import usersReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
