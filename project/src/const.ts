import { CityType } from './types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortingOptions {
  POPULAR = 'Popular',
  PRICE_ASC = 'Price: low to high',
  PRICE_DESC = 'Price: high to low',
  RATING_DESC = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const AVATAR_URL_DOMAIN =
  'https://11.react.pages.academy/static/avatar/';

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const Cities: CityType[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    },
  },
];

export const Months : string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export enum NameSpace {
  Offer = 'OFFER',
  Review = 'REVIEW',
  User = 'USER',
}

export const MAX_REVIEWS_COUNT = 10;
export const MAX_PHOTOS_COUNT = 6;
export const MARKER_SIZE = [27, 39];
export const MARKER_ANCHOR = [20, 40];
export const MARKER_URL_DEFAULT = 'img/pin.svg';
export const MARKER_URL_ACTIVE = 'img/pin-active.svg';
