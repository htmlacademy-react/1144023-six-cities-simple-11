export enum AppRoute {
    Main = '/',
    Login = '/login',
    Room = '/offer'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}


export const AVATAR_URL_DOMAIN = 'https://11.react.pages.academy/static/avatar/';


export const getRandomAvatar = () =>
  `${AVATAR_URL_DOMAIN}${Math.floor(Math.random() * 10) + 1}.jpg`;
