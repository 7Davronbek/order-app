import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
  count: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.count = state.count + action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.error = action.error.message;
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/increment",
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("Internal Error")
    // return amount;
  }
);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
