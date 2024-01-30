import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const myData = await response.json();
    return myData;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = (action.payload);
      console.log('Fulfilled =>', state)
      console.log('Payload =>', action.payload)
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.error.message);
      console.log('Rejected =>', state)
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      console.log('Loading =>', state)
    });
  },
});

export default userSlice.reducer;
