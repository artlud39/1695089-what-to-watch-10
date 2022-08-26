export enum AppRoute {
  Main = '/',
  SingIn = 'singin',
  MyList = 'mylist',
  Film = 'film/:id',
  AddReview = 'film/:id/review',
  Player = 'player/:id',
  NotFound = '*',
}

export enum AppRouteName {
  Film = 'film',
  Player = 'player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum Tab {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export enum Gerne {
  AllGeneres = 'All Genres',
}

export enum SliceName {
  Auth = 'AUTH',
  Promo = 'PROMO',
  Films = 'FILMS',
  Comments = 'COMMENTS',
  Film = 'FILM',
}

export const SHOW_FILMS_STEP = 8;
export const MAX_COUNT_SHOW_SIMILAR_FILMS = 4;
export const TIMEOUT_SHOW_ERROR = 5000;
export const DEFAULT_GENRE = 'All Genres';
