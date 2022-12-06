import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, NameSpace, SortingOptions } from '../../const';
import { OfferProcessType } from '../../types/state';
import {
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
} from '../api-actions';
import { CityType } from '../../types/city';

const initialState: OfferProcessType = {
  city: Cities[0],
  offers: [],
  currentOffer: null,
  offersNearby: [],
  currentSortOffersBy: SortingOptions.POPULAR,
  isOffersLoading: false,
};

export const offerProcessSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCityAction: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    },
    setSortOffersByAction: (state, action: PayloadAction<string>) => {
      state.currentSortOffersBy = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  },
});

export const { setCityAction, setSortOffersByAction } = offerProcessSlice.actions;
