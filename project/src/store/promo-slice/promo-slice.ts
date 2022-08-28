import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { PromoState } from '../../types/state';
import { addToFavoriteAction, fetchPromoFilmAction } from '../api-actions';

const initialState: PromoState = {
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  isLoaded: false,
  isLoadError: false,
};

export const promoSlice = createSlice({
  name: SliceName.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })
      .addCase(addToFavoriteAction.fulfilled, (state, action) => {
        if (state.promoFilm.id === action.payload.id) {
          state.promoFilm = action.payload;
        }
      });
  },
});
