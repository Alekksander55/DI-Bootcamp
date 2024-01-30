import { configureStore } from "@reduxjs/toolkit";
import myCounterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    myCounterReducer,
  },
});
