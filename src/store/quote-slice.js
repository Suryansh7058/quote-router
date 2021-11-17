import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  totalQuotes: 0,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addQuote(state, action) {
      const text = action.payload.text;
      const author = action.payload.author;
      state.totalQuotes++;
      state.quotes.push({ text: text, author: author, id: state.totalQuotes });
      console.log(state.totalQuotes);
    },
    setQuotes(state, action) {
      state.quotes = action.payload.quotes;
      state.totalQuotes = action.payload.totalQuotes;
    },
  },
});

export const quoteActions = quoteSlice.actions;
export default quoteSlice;
