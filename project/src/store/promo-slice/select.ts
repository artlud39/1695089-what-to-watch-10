import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectPromoFilm = (state: State) => state[SliceName.Promo].promoFilm;

export const selectIsLoadedPromo = (state: State) => state[SliceName.Promo].isLoaded;
