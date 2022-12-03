import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

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
  (value: string) => ({ payload: value })
);

export const setIsOffersLoadingAction = createAction(
  'offer/setIsOffersLoading',
  (value: boolean) => ({ payload: value })
);

export const setIsOfferLoadingAction = createAction(
  'offer/setIsOfferLoading',
  (value: boolean) => ({ payload: value })
);

export const requireAuthorizationAction = createAction(
  'user/requireAuthorization',
  (value: AuthorizationStatus) => ({ payload: value })
);

export const setUserEmailAction = createAction(
  'user/setUserEmail',
  (value: string | null) => ({ payload: value })
);

export const redirectToRouteAction = createAction(
  'user/redirectToRoute',
  (value: AppRoute) => ({ payload: value })
);

export const setOfferAction = createAction(
  'offer/setOffer',
  (value: OfferType) => ({payload: value})
);

export const setOffersNearbyAction = createAction(
  'offer/setOffersNearby',
  (value: OfferType[]) => ({payload: value})
);

export const setOfferReviewsAction = createAction(
  'offer/setOfferReviews',
  (value: ReviewType[]) => ({payload: value})
);

// export const setIsPostingNewReviewAction = createAction(
//   'offer/setIsPostingNewReview',
//   (value: boolean) => ({payload: value})
// );
