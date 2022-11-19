import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form';
import { offers } from '../../mocks/offers';
import Page404 from '../page404/page404';
import ReviewList from '../../components/review-list/review-list';
import { reviews as mockReviews } from '../../mocks/reviews';
// import { ReviewType } from '../../types/review';
import { OfferType } from '../../types/offer';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/city';
import List from '../../components/list/list';
import cn from 'classnames';

type RoomProps = {
  // reviews: ReviewType[];
  // offers: OfferType[];
};

function Room(props: RoomProps): JSX.Element {
  const { id } = useParams();

  const current: OfferType | undefined = offers.find(
    (offer) => offer.id === Number(id)
  );

  if (!current) {
    return <Page404 />;
  }

  const offersNearby = offers
    .filter((offer) => offer.id !== Number(id))
    .slice(0, 3);
  const offersNearbyWithCurrent = offersNearby.concat(current);

  return (
    <div className="page">
      <Helmet>
        <title>Предложение аренды: {current.location.address} </title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {current.images.map((img) => (
                <div className="property__image-wrapper" key={img}>
                  <img
                    className="property__image"
                    src={img}
                    alt={current.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {current.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{current.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${current.rating * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {current.rating * 5}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {current.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {current.maxAdults} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {current.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{current.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {current.amenities?.map((amenity) => (
                    <li key={amenity} className="property__inside-item">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={cn(
                      'property__avatar-wrapper',
                      { 'property__avatar-wrapper--pro': current.host.isPro },
                      'user__avatar-wrapper'
                    )}
                  >
                    {current.host.avatar !== '' && (
                      <img
                        className="property__avatar user__avatar"
                        src={current.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    )}
                  </div>
                  <span className="property__user-name">
                    {current.host.name}
                  </span>
                  {current.host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{current.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{mockReviews.length}</span>
                </h2>
                <ReviewList reviews={mockReviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            city={CITY}
            offers={offersNearbyWithCurrent}
            activeOfferId={Number(id)}
            mapClassName="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <List
                offers={offersNearby}
                activeCardId={Number(id)}
                cardClassName="near-places"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
