import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction} from './action';
import { Genre } from '../const';
import { films } from '../mock/films';

const initialState = {
  genre: Genre.AllGenres,
  films:  films
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    });
});


