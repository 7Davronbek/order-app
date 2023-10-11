import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PATH } from "../constants";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API_PATH + "/product");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productFetch.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(productFetch.fulfilled, (state, action) => {
        (state.items = action.payload), (state.isLoading = false);
      }),
      builder.addCase(productFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
