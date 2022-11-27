import { createReducer } from '@reduxjs/toolkit';
import { setCityAction, setOffersAction, setSortOffersByAction, setIsLoadingAction, requireAuthorizationAction, setUserEmailAction} from './action';
import { Cities, AuthorizationStatus } from '../const';
import { SortingOptions } from '../const';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';

type StateProps = {
  city: CityType;
  offers: OfferType[];
  sortOffersBy:string;
  isLoading:boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail?:string;
}

const initialState:StateProps = {
  city: Cities[0],
  offers:[],
  sortOffersBy:SortingOptions.POPULAR as string,
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
    });
});

export { reducer };
