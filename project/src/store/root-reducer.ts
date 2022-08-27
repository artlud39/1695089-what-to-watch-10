import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { promoSlice } from './promo-slice/promo-slice';
import { filmsSlice } from './films-slice/films-slice';
import { SliceName } from '../const';
import { filmSlice } from './film-slice/film-slice';
import { commentsSlice } from './comments-slice/comments-slice';
import { playerSlice } from './player-slice/player-slice';
import { favoriteSlice } from './favorite-slice/favorite-slice';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Promo]: promoSlice.reducer,
  [SliceName.Films]: filmsSlice.reducer,
  [SliceName.Film]: filmSlice.reducer,
  [SliceName.Favorite]: favoriteSlice.reducer,
  [SliceName.Comments]: commentsSlice.reducer,
  [SliceName.Player]: playerSlice.reducer,
});
