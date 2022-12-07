import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRouteAction = createAction(
  'user/redirectToRoute',
  (value: AppRoute) => ({ payload: value })
);

