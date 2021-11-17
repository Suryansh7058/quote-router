import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
