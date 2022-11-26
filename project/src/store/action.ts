import { createAction } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../const";
import { CityType } from "../types/city";
import { OfferType } from "../types/offer";

export const setCityAction = createAction(
  "offer/setCity",
  (value: CityType) => ({ payload: value })
);

export const setOffersAction = createAction(
  "offer/setOffers",
  (value: OfferType[]) => ({ payload: value })
);

export const setSortOffersByAction = createAction(
  "offer/sortOffersBy",
  (value: string) => ({ payload: value })
);

export const setIsLoadingAction = createAction(
  "offer/setIsLoading",
  (value: boolean) => ({ payload: value })
);

export const requireAuthorizationAction = createAction(
  "user/requireAuthorization",
  (value: AuthorizationStatus) => ({ payload: value })
);
