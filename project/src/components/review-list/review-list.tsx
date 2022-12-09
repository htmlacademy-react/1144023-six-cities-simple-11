import { MAX_REVIEWS_COUNT } from '../../const';
import { ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {

  const sortedReviews:ReviewType[] = reviews.slice(0,MAX_REVIEWS_COUNT);

  return (
    <ul className='reviews__list'>
      {sortedReviews?.map((review) => (
        <li className='reviews__item' key={`review-${review.id}`}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
