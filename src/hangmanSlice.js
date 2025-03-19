import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  categories: {},
  guessedLetters: [],
  word: localStorage.getItem("hangmanWord") || "",
  inCorrectGuesses: 0,
  showModal: false,
  showModal2: false,
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
      const { category, words } = action.payload;
      state.category = category;
      state.word =
        words[Math.floor(Math.random() * words.length)].name.toUpperCase();

      localStorage.setItem("hangmanWord", state.word);
      state.guessedLetters = [];
      state.inCorrectGuesses = 0;
      state.isGameOver = false;
      state.isPaused = false;

      state.showModal = false;
      state.showModal2 = false;
    },
    startGame(state) {
      state.guessedLetters = [];
      state.isGameOver = false;
      state.isPaused = false;
    },
    guessLetters(state, action) {
      if (state.isGameOver || state.isPaused) return;

      const letter = action.payload.toUpperCase();

      // Prevent duplicate guesses
      if (state.guessedLetters.includes(letter)) return;
      state.guessedLetters.push(letter);

      // If the guessed letter is incorrect, increase the incorrect count
      if (!state.word.includes(letter)) {
        state.inCorrectGuesses++;
      }

      // Check if the game is lost
      if (state.inCorrectGuesses >= 8) {
        state.isGameOver = true;
        state.showModal2 = true; // Show game-over modal
        return;
      }

      // Check if the game is won
      const uniqueLetters = new Set(state.word.replace(/\s+/g, "").split(""));
      state.guessedCorrectly = [...uniqueLetters].every((char) =>
        state.guessedLetters.includes(char),
      );

      if (state.guessedCorrectly) {
        state.isGameOver = true;
        state.showModal2 = true; // Show win modal
      }
    },
    resetGame(state) {
      if (state.category && state.categories[state.category]) {
        const words = state.categories[state.category];
        state.word =
          words[Math.floor(Math.random() * words.length)].name.toUpperCase();
        localStorage.setItem("hangmanWord", state.word);
      } else {
        state.word = "";
      }

      state.guessedLetters = [];
      state.inCorrectGuesses = 0;
      state.isGameOver = false;
      state.isPaused = false;
    },
    togglePause(state) {
      state.isPaused = false;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleModal2(state) {
      state.showModal2 = !state.showModal2;
    },
  },
});

export const {
  setCategories,
  selectCategory,
  startGame,
  guessLetters,
  resetGame,
  togglePause,
  toggleModal,
  toggleModal2,
} = hangmanSlice.actions;
export default hangmanSlice.reducer;
