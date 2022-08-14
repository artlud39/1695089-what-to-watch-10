import { createReducer } from '@reduxjs/toolkit';
import { changeGenreAction, loadFilms, setDataLoadedStatus, requireAuthorization, setError } from './actions';
import { AuthorizationStatus, Gerne } from '../const';
import { FilmsType } from '../types/films';

type InitialState = {
  genre: string,
  films: FilmsType,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
}

const initialState: InitialState = {
  genre: Gerne.AllGeneres,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
