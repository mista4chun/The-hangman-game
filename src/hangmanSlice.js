import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  categories: {},
  word: "",
  guessedLetters: [],
  inCorrectGuesses: 0,
  isGameOver: false,
  isPaused: false,
};

const hangmanSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    selectCategory(state, action) {
      // const { category, words} = action.payload
      state.category = action.payload.category;
      const words = action.payload.words;
      state.word = words[Math.floor(Math.random() * words.length)];
      state.guessedLetters = [];
      state.inCorrectGuesses = 0;
      state.isGameOver = false;
      state.isPaused = false;
    },
    startGame(state) {
      state.guessedLetters = [];
      state.isGameOver = false;
      state.isPaused = false;
    },
    guessLetters(state, action) {
      if (state.isGameOver || state.isPaused) return;
      const letter = action.payload;
      if (state.guessedLetters.includes(letter)) return;
      state.guessedLetters.push(letter);
      if (!state.word.includes(letter)) {
        state.inCorrectGuesses++;
      }
    },
    resetGame(state) {
      state.category = null;
      state.word = "";
      state.guessedLetters = [];
      state.inCorrectGuesses = 0;
      state.isGameOver = false;
      state.isPaused = false;
    },
    togglePause(state) {
      state.isPaused = !state.isPaused;
    },
  },
});

export const { setCategories,selectCategory, startGame, guessLetters, resetGame, togglePause } =
  hangmanSlice.actions;
export default hangmanSlice.reducer;
