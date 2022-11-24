import { AVATAR_URL_DOMAIN } from '../const';

export const getRandomAvatar = () =>
  `${AVATAR_URL_DOMAIN}${Math.floor(Math.random() * 10) + 1}.jpg`;
