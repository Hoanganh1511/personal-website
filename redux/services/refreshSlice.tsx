import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface reducerState {}

const initialState: reducerState = {};

export const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {},
});

export default refreshSlice;
