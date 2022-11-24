import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, showOffersAction, setSortOffersByAction } from './action';
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';
import { sortingOptions } from '../const';
import { CityType } from '../types/city';
import { OfferType } from '../types/offer';

type StateProps = {
  city: CityType;
  offers: OfferType[];
  sortOffersBy:string;
}

const initialState:StateProps = {
  city: cities[0],
  offers: offers.filter((offer) => offer.city.name !== cities[2].name), // exclude Brussels to show empty results
  sortOffersBy:sortingOptions.POPULAR as string
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOffersByAction, (state, action) => {
      state.sortOffersBy = action.payload;
    });
});

export { reducer };
