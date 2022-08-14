import { FilmType } from '../types/films';
import { State } from '../types/state';
import { getFilmGenres } from '../utils/utils';

export const DEFAULT_GENRE = 'All genres';

export const getActiveGenre = (state: State) => state.genre;

export const getFilteredFilms = (state: State) => state.films;

export const selectAuthStatus = (state: State) => state.authorizationStatus;

export const selectFilterFilms = (state: State) =>
  state.genre !== DEFAULT_GENRE
    ? state.films.filter((item: FilmType) => item.genre.toLowerCase() === state.genre)
    : state.films;

export const selectFilmGenres = (state: State) =>
  getFilmGenres(state.films);

export const selectError = (state: State) => state.error;
