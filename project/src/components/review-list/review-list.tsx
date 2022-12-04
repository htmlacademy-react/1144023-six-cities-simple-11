import { ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {

  const sortedReviews:ReviewType[] = reviews.slice(0,10);

  // if (reviews.length > 1) {
  //   sortedReviews = reviews.slice(0, 10).sort(
  //     (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  //   );
  // }

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
