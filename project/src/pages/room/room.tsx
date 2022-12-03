import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import { getRatingWidth } from '../../utils/utils';
import Map from '../../components/map/map';
import List from '../../components/list/list';
import cn from 'classnames';
import useAppSelector from '../../hooks/useAppSelector';
import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import {
  fetchOfferAction,
  fetchOfferReviewsAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions';
import Preloader from '../../components/preloader/preloader';
import { AuthorizationStatus } from '../../const';

function Room(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentOfferId = Number(id);

  useEffect(() => {
    dispatch(fetchOfferAction(currentOfferId));
    dispatch(fetchOffersNearbyAction(currentOfferId));
    dispatch(fetchOfferReviewsAction(currentOfferId));
  }, [currentOfferId, dispatch]);

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const currentOfferReviews = useAppSelector((state) => state.currentOfferReviews);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentCity = useAppSelector((state) => state.city);

  if (!currentOffer) {
    return <Preloader />;
  }

  const offersNearbyWithCurrent = [...offersNearby, currentOffer];

  return (
    <div className='page'>
      <Helmet>
        <title>{currentOffer.city.name}: rent offer</title>
      </Helmet>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {currentOffer.images?.map((img) => (
                <div className='property__image-wrapper' key={img}>
                  <img
                    className='property__image'
                    src={img}
                    alt={currentOffer.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {currentOffer.isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{currentOffer.title}</h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span
                    style={{ width: getRatingWidth(currentOffer.rating) }}
                  >
                  </span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {currentOffer.rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {currentOffer.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {currentOffer.maxAdults} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>
                  &euro;{currentOffer.price}
                </b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {currentOffer.goods?.map((good) => (
                    <li key={good} className='property__inside-item'>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div
                    className={cn(
                      'property__avatar-wrapper',
                      {
                        'property__avatar-wrapper--pro':
                          currentOffer.host.isPro
                      },
                      'user__avatar-wrapper'
                    )}
                  >
                    {currentOffer.host.avatarUrl !== '' && (
                      <img
                        className='property__avatar user__avatar'
                        src={currentOffer.host.avatarUrl}
                        width='74'
                        height='74'
                        alt='Host avatar'
                      />
                    )}
                  </div>
                  <span className='property__user-name'>
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className='property__user-status'>Pro</span>
                  )}
                </div>
                <div className='property__description'>
                  <p className='property__text'>{currentOffer.description}</p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot;{' '}
                  <span className='reviews__amount'>{currentOfferReviews.length}</span>
                </h2>
                <ReviewList reviews={currentOfferReviews} />
                {(authorizationStatus === AuthorizationStatus.Auth) && <ReviewForm offerId={currentOfferId}/>}
              </section>
            </div>
          </div>
          <Map
            city={currentCity}
            offers={offersNearbyWithCurrent}
            activeOfferId={currentOfferId}
            mapClassName='property__map'
          />
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <List
                offers={offersNearby}
                activeCardId={currentOfferId}
                cardClassName='near-places'
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
