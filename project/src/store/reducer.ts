import { createReducer } from '@reduxjs/toolkit';
import {
  setCityAction,
  setOffersAction,
  setSortOffersByAction,
  requireAuthorizationAction,
  setUserEmailAction,
  setOfferAction,
  setOffersNearbyAction,
  setOfferReviewsAction,
  setIsOffersLoadingAction,
  // setIsPostingNewReviewAction
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
  // isPostingNewReview:boolean;
  isOffersLoading:boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail:string | null;
}

const initialState:StateProps = {
  city: Cities[0],
  offers:[],
  currentOffer:null,
  offersNearby:[],
  sortOffersBy:SortingOptions.POPULAR as string,
  currentOfferReviews:[],
  isOffersLoading:false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail:null,
  // isPostingNewReview:false
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
    .addCase(setIsOffersLoadingAction, (state, action) => {
      state.isOffersLoading = action.payload;
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
  // .addCase(setIsPostingNewReviewAction, (state, action) => {
  //   state.isPostingNewReview = action.payload;
  // });
});

export { reducer };
