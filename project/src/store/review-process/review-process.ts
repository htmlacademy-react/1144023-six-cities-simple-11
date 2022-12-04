import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewProcessType } from '../../types/state';
import { fetchOfferReviewsAction, postNewReviewAction } from '../api-actions';

const initialState: ReviewProcessType = {
  currentOfferReviews: [],
};

export const reviewProcessSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.currentOfferReviews = action.payload;
      })
      .addCase(postNewReviewAction.fulfilled, (state, action) => {
        state.currentOfferReviews = action.payload;
      });
  },
});
