import { ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <li className='reviews__item' key={`review-${review.id}`}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
