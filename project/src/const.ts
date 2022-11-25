export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum sortingOptions {
  POPULAR = 'Popular',
  PRICE_ASC = 'Price: low to high',
  PRICE_DESC = 'Price: high to low',
  RATING_DESC = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export const AVATAR_URL_DOMAIN =
  'https://11.react.pages.academy/static/avatar/';

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
