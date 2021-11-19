import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allComments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action) {
      const quoteId = action.payload.quoteId;
      const comment = action.payload.comment;
      const existingId = state.allComments.find(
        (comment) => comment.quoteId === quoteId
      );
      if (existingId) {
        existingId.comments.push(comment);
      } else {
        state.allComments.push({
          quoteId: quoteId,
          comments: [comment],
        });
      }
    },
    getComments(state, action) {
      state.allComments = action.payload.comments;
    },
  },
});
export const commentActions = commentSlice.actions;
export default commentSlice;
