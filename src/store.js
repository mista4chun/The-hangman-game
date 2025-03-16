import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./hangmanSlice";

const store = configureStore({
  reducer: {
    hangman: hangmanReducer,
  },
});

export default store;
