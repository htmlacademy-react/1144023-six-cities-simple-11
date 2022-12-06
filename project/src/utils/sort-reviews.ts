import { ReviewType } from './../types/review';

export const sortReviews = (reviews: ReviewType[]) => {
  const sortedReviews: ReviewType[] = [...reviews];

  if (sortedReviews.length > 1) {
    sortedReviews.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
  }
  return sortedReviews;
};
