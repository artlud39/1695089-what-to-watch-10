import { createSlice } from '@reduxjs/toolkit';
import { FilmsType} from '../../types/films';
import { DEFAULT_GENRE, SliceName } from '../../const';
import { fetchFilmsAction } from '../api-actions';

type FilmsState = {
  similarFilms: FilmsType;
  genre: string;
  films: FilmsType;
  isLoaded: boolean;
}

const initialState: FilmsState = {
  similarFilms: [],
  genre: DEFAULT_GENRE,
  films: [],
  isLoaded: false,
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload ?? DEFAULT_GENRE;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoaded = false;
      });
  },
});

export const {changeGenre} = filmsSlice.actions;
