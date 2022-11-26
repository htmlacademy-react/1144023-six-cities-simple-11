import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoadingAction, setOffersAction, requireAuthorizationAction } from './action';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus } from '../const';
import { OfferType } from '../types/offer';
import { UserType } from '../types/user';
import { AuthType } from '../types/auth';
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
>('user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);