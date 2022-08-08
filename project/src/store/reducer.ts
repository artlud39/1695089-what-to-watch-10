import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction, loadFilms, setDataLoadedStatus, requireAuthorization, showMoreFilms, resetFilmsCount} from './actions';
import { AuthorizationStatus} from '../const';
import {FilmsType} from '../types/films';
import {SHOW_FILMS_STEP} from '../const';

type InitialState = {
  genre: string,
  films: FilmsType,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  renderFilmsCount: number,
}

const initialState: InitialState = {
  genre: 'All Genres',
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  renderFilmsCount: SHOW_FILMS_STEP,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
      state.renderFilmsCount = initialState.renderFilmsCount;
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
    .addCase(showMoreFilms, (state, action) => {
      state.renderFilmsCount = action.payload;
    })
    .addCase(resetFilmsCount, (state) => {
      state.renderFilmsCount = initialState.renderFilmsCount;
    });
});

export {reducer};
