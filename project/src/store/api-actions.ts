import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setIsLoadingAction,
  setOffersAction,
  requireAuthorizationAction,
  redirectToRouteAction,
  setOfferAction,
  setOffersNearbyAction,
  setOfferReviewsAction,
} from './action';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { OfferType } from '../types/offer';
import { UserType } from '../types/user';
import { AuthType } from '../types/auth';
import { ReviewData, ReviewType } from '../types/review';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoadingAction(true));
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  dispatch(setOffersAction(data));
  dispatch(setIsLoadingAction(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserType>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  dispatch(redirectToRouteAction(AppRoute.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    // dispatch(setIsLoadingAction(true));
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    dispatch(setOfferAction(data));
    // dispatch(setIsLoadingAction(false));
  } catch {
    dispatch(redirectToRouteAction(AppRoute.NotFound));
  }
});

export const fetchOffersNearbyAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffersNearby', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  dispatch(setOffersNearbyAction(data));
});

export const fetchOfferReviewsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${id}`);
  dispatch(setOfferReviewsAction(data));
});

export const postNewReviewAction = createAsyncThunk<
  void,
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postNewReview', async ({ id, comment, rating }, { dispatch, extra: api }) => {
  await api.post<ReviewData>(`${APIRoute.Reviews}/${id}`, { comment, rating });
  dispatch(fetchOfferReviewsAction(id));
});

