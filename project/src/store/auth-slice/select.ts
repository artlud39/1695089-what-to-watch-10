import { State } from '../../types/state';
import { SliceName } from '../../const';


export const selectAuthStatus = (state: State) => state[SliceName.Auth].authStatus;

export const selectAvatar = (state: State) => state[SliceName.Auth].avatar;

export const selectError = (state: State) => state[SliceName.Auth].error;

export const selectIsLoginSending = (state: State) => state[SliceName.Auth].isSending;
