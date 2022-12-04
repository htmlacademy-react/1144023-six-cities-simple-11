import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { CityType } from '../../types/city';
import { OfferType } from '../../types/offer';
import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../../utils/sort-offers';

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.Offer].isOffersLoading;
export const getCurrentCity = (state: State): CityType =>
  state[NameSpace.Offer].city;
export const getOffers = (state: State): OfferType[] =>
  state[NameSpace.Offer].offers;
export const getCurrentSortOffersBy = (state: State) =>
  state[NameSpace.Offer].currentSortOffersBy;
export const getCurrentOffer = (state: State): OfferType | null =>
  state[NameSpace.Offer].currentOffer;
export const getOffersNearby = (state: State): OfferType[] =>
  state[NameSpace.Offer].offersNearby;

export const getCurrentCityOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);

export const getCurrentCitySortedOffers = createSelector(
  [getCurrentCityOffers, getCurrentSortOffersBy],
  (offers, currentSortType) => sortOffers(offers, currentSortType)
);
