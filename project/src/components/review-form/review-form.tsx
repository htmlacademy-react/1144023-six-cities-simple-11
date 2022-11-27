import { ChangeEvent, Fragment, useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { postNewReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  offerId: number;
};

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    review: '',
  });
  const ratingArr: number[] = Array.from({ length: 5 }, (_, i) => i + 1).reverse();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function handleFieldChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = target;
    setReviewFormData({ ...reviewFormData, [name]: value });

    if (target.tagName === 'TEXTAREA') {
      setButtonDisabled(target.value.length < 50);
    }
  }

  function handleReviewFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(
      postNewReviewAction({
        id: offerId,
        comment: reviewFormData.review,
        rating: Number(reviewFormData.rating),
      })
    );
    setReviewFormData({
      rating: 0,
      review: ''
    });
  }

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleReviewFormSubmit}
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
          disabled={!!buttonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
