import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {FilmsType} from '../types/films';

export const changeGenreAction = createAction('movies/genre/changeGenre', (genre) => ({
  payload: genre
}));

export const loadFilms = createAction<FilmsType>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const showMoreFilms = createAction<number>('data/showMoreFilms');

export const resetFilmsCount = createAction('data/reset');
