import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';


export const setCityAction = createAction(
  'setCity',
  (value: CityType) => ({ payload: value })
);

export const setOffersAction = createAction(
  'setOffers',
  (value: OfferType[]) => ({ payload: value })
);

export const setSortOffersByAction = createAction(
  'sortOffersBy',
  (sortingOption:string) => ({ payload: sortingOption })
);

export const setIsLoadingAction = createAction(
  'setIsLoading',
  (value: boolean) => ({ payload: value })
);
