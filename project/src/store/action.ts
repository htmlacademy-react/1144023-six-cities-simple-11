import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';

export const setCityAction = createAction(
  'offer/setCity',
  (value: CityType) => ({ payload: value })
);

export const setOffersAction = createAction(
  'offer/setOffers',
  (value: OfferType[]) => ({ payload: value })
);

export const setSortOffersByAction = createAction(
  'offer/sortOffersBy',
  (sortingOption:string) => ({ payload: sortingOption })
);

export const setIsLoadingAction = createAction(
  'offer/setIsLoading',
  (value: boolean) => ({ payload: value })
);
