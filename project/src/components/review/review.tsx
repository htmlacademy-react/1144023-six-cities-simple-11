import { ReviewType } from '../../types/review';
import { Months } from '../../const';
import { getRatingWidth } from '../../utils/utils';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps): JSX.Element {
  const { user, rating, comment, date } = review;
  const reviewDate = new Date(date);
  const formattedReviewDate = `${Months[reviewDate.getMonth()]} ${reviewDate.getFullYear()}`;

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating, false) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formattedReviewDate}
        </time>
      </div>
    </>
  );
}

export default Review;
