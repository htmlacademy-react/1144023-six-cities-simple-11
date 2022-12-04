import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { CityType } from './city.js';
import { OfferType } from './offer.js';
import { ReviewType } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};

export type OfferProcessType = {
  city: CityType;
  offers: OfferType[];
  currentOffer: OfferType | null;
  offersNearby: OfferType[];
  currentSortOffersBy: string;
  isOffersLoading: boolean;
};

export type ReviewProcessType = {
  currentOfferReviews: ReviewType[];
};
