import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { ReviewType } from '../../types/review';
import { createSelector } from '@reduxjs/toolkit';
import { sortReviews } from '../../utils/sort-reviews';

export const getCurrentOfferReviews = (state: State): ReviewType[] =>
  state[NameSpace.Review].currentOfferReviews;

export const getCurrentOfferSortedReviews = createSelector(
  getCurrentOfferReviews,
  (reviews) => sortReviews(reviews)
);
