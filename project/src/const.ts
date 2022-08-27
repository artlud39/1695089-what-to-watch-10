export enum AppRoute {
  Main = '/',
  SingIn = 'singin',
  MyList = 'mylist',
  Film = 'film/:id',
  AddReview = 'film/:id/review',
  Player = 'player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/film',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
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
  Film = 'FILM',
  Favorite = 'FAVORITE',
  Comments = 'COMMENTS',
  Player = 'PLAYER',
}

export enum PlayType {
  Film = 'FILM',
  Promo = 'PROMO',
  Unknown = 'UNKNOWN',
}

export enum CommentLength {
  Min = 50,
  Max = 400,
}

export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
  ServerError = 'Unknown server error'
}

export const SHOW_FILMS_STEP = 8;

export const MAX_COUNT_SHOW_SIMILAR_FILMS = 4;

export const TIMEOUT_SHOW_ERROR = 5000;

export const DEFAULT_GENRE = 'All Genres';

export const DEFAULT_RATING = 0;

export const QUERY_PARAM_NAME = 'tab';
