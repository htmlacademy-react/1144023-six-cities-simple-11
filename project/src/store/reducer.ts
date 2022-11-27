import { createReducer } from '@reduxjs/toolkit';
import {
  setCityAction,
  setOffersAction,
  setSortOffersByAction,
  setIsLoadingAction,
  requireAuthorizationAction,
  setUserEmailAction,
  setOfferAction,
  setOffersNearbyAction,
  setOfferReviewsAction,
} from './action';
import { Cities, AuthorizationStatus } from '../const';
import { SortingOptions } from '../const';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

type StateProps = {
  city: CityType;
  offers: OfferType[];
  currentOffer:OfferType | null;
  offersNearby:OfferType[];
  sortOffersBy:string;
  currentOfferReviews:ReviewType[];
  isLoading:boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail?:string;
}

const initialState:StateProps = {
  city: Cities[0],
  offers:[],
  currentOffer:null,
  offersNearby:[],
  sortOffersBy:SortingOptions.POPULAR as string,
  currentOfferReviews:[],
  isLoading:false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOffersByAction, (state, action) => {
      state.sortOffersBy = action.payload;
    })
    .addCase(setIsLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmailAction, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOffersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOfferReviewsAction, (state, action) => {
      state.currentOfferReviews = action.payload;
    });
});

export { reducer };
