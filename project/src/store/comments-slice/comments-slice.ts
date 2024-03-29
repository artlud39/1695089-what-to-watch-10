import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { fetchCommentsAction, sendCommentAction } from '../api-actions';
import { CommentsSlice } from '../../types/state';

const initialState: CommentsSlice = {
  comments: [],
  isSending: false,
  error: '',
};

export const commentsSlice = createSlice({
  name: SliceName.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isSending = false;
        state.error = '';
      })
      .addCase(sendCommentAction.rejected, (state, action: AnyAction) => {
        state.isSending = false;
        state.error = action.payload;
      });
  },
});
