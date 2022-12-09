import { configureStore } from "@reduxjs/toolkit";
import { darkModeReducer } from "./features/darkModeSlice";

export default configureStore({
  reducer: { darkMode: darkModeReducer },
});
