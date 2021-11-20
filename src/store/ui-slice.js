import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    setStopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
