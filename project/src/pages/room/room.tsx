import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form';
import { offers } from '../../mocks/offers';
import Page404 from '../page404/page404';

function Room(): JSX.Element {
  const { id } = useParams();
  const roomData = offers.find((offer) => offer.id === Number(id));

  return roomData ? (
    <div className='page'>
      <Helmet>
        <title>Предложение аренды: {roomData.location.address} </title>
      </Helmet>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {roomData.images.map((img) => (
                <div className='property__image-wrapper' key={img}>
                  <img
                    className='property__image'
                    src={img}
                    alt={roomData.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {roomData.isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{roomData.title}</h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${roomData.rating * 100}%` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {roomData.rating * 5}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {roomData.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {roomData.maxAdults} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {roomData.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{roomData.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {roomData.amenities?.map((amenity) => (
                    <li key={amenity} className='property__inside-item'>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    {roomData.host.avatar !== '' && (
                      <img
                        className='property__avatar user__avatar'
                        src={roomData.host.avatar}
                        width='74'
                        height='74'
                        alt='Host avatar'
                      />
                    )}
                  </div>
                  <span className='property__user-name'>{roomData.host.name}</span>
                  {roomData.host.isPro && <span className='property__user-status'>Pro</span>}
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {roomData.description}
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>1</span>
                </h2>
                <ul className='reviews__list'>
                  <li className='reviews__item'>
                    <div className='reviews__user user'>
                      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                        <img
                          className='reviews__avatar user__avatar'
                          src='img/avatar-max.jpg'
                          width='54'
                          height='54'
                          alt='Reviews avatar'
                        />
                      </div>
                      <span className='reviews__user-name'>Max</span>
                    </div>
                    <div className='reviews__info'>
                      <div className='reviews__rating rating'>
                        <div className='reviews__stars rating__stars'>
                          <span style={{ width: '80%' }}></span>
                          <span className='visually-hidden'>Rating</span>
                        </div>
                      </div>
                      <p className='reviews__text'>
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time className='reviews__time' dateTime='2019-04-24'>
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className='property__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to={AppRoute.Room}>
                    <img
                      className='place-card__image'
                      src='img/room.jpg'
                      width='260'
                      height='200'
                      alt='Place image'
                    />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;80</b>
                      <span className='place-card__price-text'>
                        &#47;&nbsp;night
                      </span>
                    </div>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '80%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Wood and stone place</a>
                  </h2>
                  <p className='place-card__type'>Private room</p>
                </div>
              </article>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to={`${AppRoute.Room}/${roomData.id}`}>
                    <img
                      className='place-card__image'
                      src='img/apartment-02.jpg'
                      width='260'
                      height='200'
                      alt='Place image'
                    />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;132</b>
                      <span className='place-card__price-text'>
                        &#47;&nbsp;night
                      </span>
                    </div>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '80%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Canal View Prinsengracht</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
              <article className='near-places__card place-card'>
                <div className='place-card__mark'>
                  <span>Premium</span>
                </div>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to={AppRoute.Room}>
                    <img
                      className='place-card__image'
                      src='img/apartment-03.jpg'
                      width='260'
                      height='200'
                      alt='Place image'
                    />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;180</b>
                      <span className='place-card__price-text'>
                        &#47;&nbsp;night
                      </span>
                    </div>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '100%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (
    <Page404 />
  );
}

export default Room;
