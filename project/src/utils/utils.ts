import { FilmsType } from '../types/films';

export const getFilmGenres = (filmList: FilmsType): string[] =>
  ['All Genres', ...new Set(filmList.map((film) => film.genre))];
