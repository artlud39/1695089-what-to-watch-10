import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction, loadFilms, setDataLoadedStatus, requireAuthorization} from './actions';
import { AuthorizationStatus} from '../const';
import {FilmsType} from '../types/films';

type InitialState = {
  genre: string,
  films: FilmsType,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  genre: 'All Genres',
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});

export {reducer};
