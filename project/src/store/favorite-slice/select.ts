import {State} from '../../types/state';
import {SliceName} from '../../const';

export const selectFavorites = (state: State) => state[SliceName.Favorite].favorites;

export const selectIsLoadedFavorites = (state: State) => state[SliceName.Favorite].isLoaded;

export const selectIsLoadedError = (state: State) => state[SliceName.Favorite].isLoadError;
