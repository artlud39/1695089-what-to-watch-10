import {configureStore} from '@reduxjs/toolkit';
import {mainReducer} from './reducer';
import {createAPI} from '../services/api';

const api = createAPI();

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
