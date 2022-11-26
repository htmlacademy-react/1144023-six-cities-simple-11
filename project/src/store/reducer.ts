import { createReducer } from '@reduxjs/toolkit';
import { setCityAction, setOffersAction, setSortOffersByAction, setIsLoadingAction} from './action';
import { Cities } from '../const';
import { SortingOptions } from '../const';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';

type StateProps = {
  city: CityType;
  offers: OfferType[];
  sortOffersBy:string;
  isLoading:boolean;
}

const initialState:StateProps = {
  city: Cities[0],
  offers:[],
  sortOffersBy:SortingOptions.POPULAR as string,
  isLoading:false
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
    });
});

export { reducer };
