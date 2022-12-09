import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "dark" };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value === "dark" ? (state.value = "light") : (state.value = "dark");
    },
  },
});

export const { changeMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;
