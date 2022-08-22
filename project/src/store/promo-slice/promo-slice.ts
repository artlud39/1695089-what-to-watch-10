import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { PromoState } from '../../types/state';
import { fetchPromoFilmAction } from '../api-actions';

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
};

export const promoSlice = createSlice({
  name: SliceName.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoaded = false;
      });
  },
});
