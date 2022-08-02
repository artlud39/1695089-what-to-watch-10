import {createAction} from '@reduxjs/toolkit';
import {FilmsType} from '../types/films';

export const changeGenreAction = createAction('movies/genre/changeGenre', (genre) => ({
  payload: genre
}));

export const loadAllFilms = createAction<FilmsType>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
