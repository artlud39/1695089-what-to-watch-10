export enum AppRoute {
  Main = '/',
  SingIn = 'singin',
  MyList = 'mylist',
  Movie = 'movie/:id',
  AddReview = 'addreview',
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
  Login = '/login',
  Logout = '/logout',
}
