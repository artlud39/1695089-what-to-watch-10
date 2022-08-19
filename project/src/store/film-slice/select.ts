import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectFilm = (state: State) => state[SliceName.Film].film;

export const selectSimilarFilms = (state: State) => state[SliceName.Films].similarFilms;
