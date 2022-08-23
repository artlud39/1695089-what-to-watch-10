import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus } from '../../const';

type AuthSlice = {
  authStatus: AuthorizationStatus;
  error: string;
}

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.error = '';
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.error = '';
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.error = '';
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.error = action.payload as string;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.error = '';
      });
  },
});

export const {setError} = authSlice.actions;
