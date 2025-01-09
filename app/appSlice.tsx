import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reducerState {
  isShowSearchDrawer: boolean;
  isDarkTheme: boolean;
}

const initialState: reducerState = {
  isShowSearchDrawer: false,
  isDarkTheme: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowSearchDrawer: (state, action: PayloadAction<boolean>) => {
      state.isShowSearchDrawer = action.payload;
    },
    setDarkTheme: (state, action: PayloadAction<boolean>) => {
      document.body.classList.toggle("dark");
      state.isDarkTheme = action.payload;
    },
  },
});

export default appSlice;
