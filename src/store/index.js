import { configureStore } from '@reduxjs/toolkit';

import quoteSlice from './quote-slice';

const store = configureStore({
  reducer: { quotes: quoteSlice.reducer },
});

export default store;
