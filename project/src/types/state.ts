import { AuthorizationStatus, PlayType } from '../const';
import { store } from '../store/index';
import { rootReducer } from '../store/root-reducer';
import { CommentsType } from './comments';
import { FilmsType, FilmType } from './films';

export type Reducer = ReturnType<typeof rootReducer>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthSlice = {
  authStatus: AuthorizationStatus;
  avatar: string;
  error: string;
  isSending: boolean;
};

export type CommentsSlice = {
  comments: CommentsType;
  isSending: boolean;
  error: string;
}

export type FilmSlice = {
  film: FilmType;
  similarFilms: FilmsType;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type FilmsState = {
  genre: string;
  films: FilmsType;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type PromoState = {
  promoFilm: FilmType;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type FavoriteSlice = {
  favorites: FilmsType;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type PlayerSlice = {
  playType: PlayType,
}
