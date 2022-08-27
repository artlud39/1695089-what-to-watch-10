import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { rootReducer } from '../store/root-reducer';
import { CommentType } from './comments';
import { FilmsType, FilmType } from './films';

export type Reducer = ReturnType<typeof rootReducer>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthSlice = {
  authStatus: AuthorizationStatus;
  avatar: string;
  error: string;
};

export type CommentsSlice = {
  comments: CommentType[];
  isSending: boolean;
}

export type FilmSlice = {
  film: FilmType;
  similarFilms: FilmsType;
}

export type FilmsState = {
  genre: string;
  films: FilmsType;
  isLoaded: boolean;
}

export type PromoState = {
  promoFilm: FilmType;
  isLoaded: boolean;
}
