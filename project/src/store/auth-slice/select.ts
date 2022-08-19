import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectAuthStatus = (state: State) => state[SliceName.Auth].authStatus;

export const selectError = (state: State) => state[SliceName.Auth].error;
