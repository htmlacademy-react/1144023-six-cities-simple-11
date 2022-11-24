import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';


export const changeCityAction = createAction(
  'changeCity',
  (value: CityType) => ({ payload: value })
);

export const showOffersAction = createAction(
  'showOffers',
  (value: OfferType[]) => ({ payload: value })
);

export const setSortOffersByAction = createAction(
  'sortOffersBy',
  (sortingOption:string) => ({ payload: sortingOption })
);
