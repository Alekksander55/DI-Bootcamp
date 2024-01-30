import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      state.count += action.payload.a + action.payload.b;
    },
    // Other way to reduce
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload.a + action.payload.b;
      },
      prepare(a, b) {
        return {
          payload: { a, b },
        };
      },
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementBy,
  incrementWithPrepare,
} = counterSlice.actions;

export default counterSlice.reducer;
