import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoadingAction, setOffersAction } from './action';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';
import { OfferType } from '../types/offer';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoadingAction(true));
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);

  setTimeout(() => {
    dispatch(setOffersAction(data));
    dispatch(setIsLoadingAction(false));
  }, 500);
});
