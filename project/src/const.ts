export enum AppRoute {
  Main = '/',
  SingIn = 'singin',
  MyList = 'mylist',
  Movie = 'movie/:id',
  AddReview = 'addreview/:id',
  Player = 'player',
  NotFound = '*',
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
}

export const SHOW_FILMS_STEP = 8;
export const TIMEOUT_SHOW_ERROR = 5000;
export const DEFAULT_GENRE = 'All Genres';
