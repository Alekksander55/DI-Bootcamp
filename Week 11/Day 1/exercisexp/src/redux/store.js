import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./reducer";

export default configureStore({
  reducer: {
    toDoReducer,
  },
});
