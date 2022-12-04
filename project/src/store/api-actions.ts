import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // setOffersAction,
  // requireAuthorizationAction,
  redirectToRouteAction,
  // setOfferAction,
  // setOffersNearbyAction,
  // setOfferReviewsAction,
  // setIsOffersLoadingAction,
  // setUserEmailAction,
} from './action';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { OfferType } from '../types/offer';
import { UserType } from '../types/user';
import { AuthType } from '../types/auth';
import { ReviewDataType, ReviewType } from '../types/review';
import { dropToken, saveToken } from '../services/token';

export const checkAuthAction = createAsyncThunk<
  string,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  // try {
  const {
    data: { email },
  } = await api.get<UserType>(APIRoute.Login);
  //   dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  //   dispatch(setUserEmailAction(email));
  // } catch {
  //   dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  // }
  return email;
});

export const loginAction = createAsyncThunk<
  string,
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
  // dispatch(setUserEmailAction(email));
  // dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  dispatch(redirectToRouteAction(AppRoute.Main));
  return email;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  // dispatch(setUserEmailAction(null));
  // dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
});

export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  { state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  // dispatch(setIsOffersLoadingAction(true));
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  // dispatch(setOffersAction(data));
  // dispatch(setIsOffersLoadingAction(false));
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  OfferType | null,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    return data;
    // //   dispatch(setOfferAction(data));
  } catch {
    dispatch(redirectToRouteAction(AppRoute.NotFound));
    return null;
  }
});

export const fetchOffersNearbyAction = createAsyncThunk<
  OfferType[],
  number,
  {
    // dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffersNearby', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  //dispatch(setOffersNearbyAction(data));
  return data;
});

export const fetchOfferReviewsAction = createAsyncThunk<
  ReviewType[],
  number,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (id, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${id}`);
  //dispatch(setOfferReviewsAction(data));
  return data;
});

export const postNewReviewAction = createAsyncThunk<
  ReviewType[],
  ReviewDataType,
  {
    // dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postNewReview',
  async ({ id, comment, rating }, { extra: api }) => {
    const {data} = await api.post<ReviewType[]>(`${APIRoute.Reviews}/${id}`, {
      comment,
      rating,
    });
    //dispatch(fetchOfferReviewsAction(id));
    return data;
  }
);
