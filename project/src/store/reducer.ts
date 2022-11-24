import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, showOffersAction } from './action';
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';

const initialState = {
  city: cities[0],
  // offers:offers,
  offers: offers.filter((offer) => offer.city.name !== cities[2].name)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
