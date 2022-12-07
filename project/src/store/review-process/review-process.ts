import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewProcessType } from '../../types/state';
import { fetchOfferReviewsAction, postNewReviewAction } from '../api-actions';

const initialState: ReviewProcessType = {
  currentOfferReviews: [],
  isPostingNewReview:false,
  isPostingNewReviewError:false
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
      .addCase(postNewReviewAction.pending, (state, action) => {
        state.isPostingNewReview = true;
        state.isPostingNewReviewError = false;
      })
      .addCase(postNewReviewAction.fulfilled, (state, action) => {
        state.currentOfferReviews = action.payload;
        state.isPostingNewReview = false;
        state.isPostingNewReviewError = false;
      })
      .addCase(postNewReviewAction.rejected, (state, action) => {
        state.isPostingNewReview = false;
        state.isPostingNewReviewError = true;
      });
  },
});
