import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import quoteSlice from './quote-slice';

const store = configureStore({
  reducer: { quotes: quoteSlice.reducer, ui: uiSlice.reducer },
});

export default store;
