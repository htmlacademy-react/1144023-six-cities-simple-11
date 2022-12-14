import { ChangeEvent, Fragment, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { postNewReviewAction } from '../../store/api-actions';
import { getIsPostingNewReview, getIsPostingNewReviewError } from '../../store/review-process/selectors';

type ReviewFormProps = {
  offerId: number;
};

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {

  const dispatch = useAppDispatch();
  const isPostingNewReview = useAppSelector(getIsPostingNewReview);
  const isPostingNewReviewError = useAppSelector(getIsPostingNewReviewError);
  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    review: '',
  });
  const ratingArr: number[] = Array.from(
    { length: 5 },
    (_, i) => i + 1
  ).reverse();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  function handleFieldChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = target;
    setReviewFormData({ ...reviewFormData, [name]: value });

    if (target.tagName === 'TEXTAREA') {
      setButtonDisabled(target.value.length < 50 || target.value.length > 300);
    }
  }

  function handleReviewFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!Number(reviewFormData.rating)) {
      toast.warn('Please select rating');
      return;
    }

    dispatch(
      postNewReviewAction({
        id: offerId,
        comment: reviewFormData.review,
        rating: Number(reviewFormData.rating),
      })
    );

    if (isPostingNewReviewError) {
      toast.warn('Error: cannot post a new review');
      return;
    }

    setReviewFormData({
      rating: 0,
      review: '',
    });
    formRef.current && formRef.current.reset();

    setButtonDisabled(true);
  }

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleReviewFormSubmit}
      ref={formRef}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {ratingArr.map((i) => (
          <Fragment key={`rating-${i}`}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={i}
              id={`${i}-stars`}
              type='radio'
              onChange={handleFieldChange}
              checked={i === Number(reviewFormData.rating)}
              disabled={isPostingNewReview}
            />
            <label
              htmlFor={`${i}-stars`}
              className='reviews__rating-label form__rating-label'
              title='perfect'
            >
              <svg className='form__star-image' width='37' height='33'>
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={handleFieldChange}
        value={reviewFormData.review}
        disabled={isPostingNewReview}
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
