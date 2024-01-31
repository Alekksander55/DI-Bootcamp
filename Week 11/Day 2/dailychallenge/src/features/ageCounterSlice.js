import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  age: 20,
  status: 'idle',
};

export const ageUpAsync = createAsyncThunk(
  'counter/ageUpAsync',
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const incrementedAge = amount;
    return incrementedAge;
  }
);

export const ageDownAsync = createAsyncThunk(
  'counter/ageDownAsync',
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const decrementedAge = -amount;
    return decrementedAge;
  }
);


const ageCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.status = 'succeeded';
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.status = 'succeeded';
      });
  },
});

export default ageCounterSlice.reducer;