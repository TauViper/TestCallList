import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getApi,
  // getApiResource
} from './api/api';

export const initialState = [];

export const getTotalCalls = createAsyncThunk(
  'total/getTotalCalls',
  async (url) => {
    const res = await getApi(url);
    return res.data.results;
  }
);

export const callsSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalCalls.fulfilled, (state, action) => action.payload);
  },
});

export const sliceCalls = callsSlice.reducer;
