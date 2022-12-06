import { AVATAR_URL_DOMAIN } from '../const';

export const getRandomAvatar = () =>
  `${AVATAR_URL_DOMAIN}${Math.floor(Math.random() * 10) + 1}.jpg`;

export const getRatingWidth = (rating: number, isPrecision: boolean) =>
  isPrecision ? `${(rating * 100) / 5}%` : `${(Math.round(rating) * 100) / 5}%`;
