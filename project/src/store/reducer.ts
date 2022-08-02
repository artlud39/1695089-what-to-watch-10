import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction, loadAllFilms, setDataLoadedStatus} from './action';
import { Genre } from '../const';
import {FilmsType} from '../types/films';

type InitialState = {
  genre: string,
  films: FilmsType,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  genre: Genre.AllGenres,
  films: [],
  isDataLoaded: false,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadAllFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

