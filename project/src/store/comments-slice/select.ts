import {State} from '../../types/state';
import {SliceName} from '../../const';

export const selectComments = (state: State) => state[SliceName.Comments].comments;

export const selectIsSendingComment = (state: State) => state[SliceName.Comments].isSending;

export const selectCommentError = (state: State) => state[SliceName.Comments].error;
