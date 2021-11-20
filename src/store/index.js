import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import quoteSlice from './quote-slice';
import commentSlice from './comment-slice';
const store = configureStore({
  reducer: {
    quotes: quoteSlice.reducer,
    ui: uiSlice.reducer,
    comments: commentSlice.reducer,
  },
});

export default store;
