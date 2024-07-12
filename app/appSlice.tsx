import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reducerState {
  isShowSearchDrawer: boolean;
}

const initialState: reducerState = {
  isShowSearchDrawer: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowSearchDrawer: (state, action: PayloadAction<boolean>) => {
      state.isShowSearchDrawer = action.payload;
    },
  },
});

export default appSlice;
