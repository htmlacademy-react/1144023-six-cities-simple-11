import Header from '../../components/header/header';
import List from '../../components/list/list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useState } from 'react';
import CityMenu from '../../components/city-menu/city-menu';
import useAppSelector from '../../hooks/useAppSelector';
import cn from 'classnames';
import Sorting from '../../components/sorting/sorting';
import { sortOffers } from '../../utils/sort-offers';
import Preloader from '../../components/preloader/preloader';

function HomePage(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  let currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity.name
  );
  const currentSortOffersBy = useAppSelector((state) => state.sortOffersBy);
  currentCityOffers = sortOffers(currentCityOffers, currentSortOffersBy);


  const handleMouseEnter = (offerId: number | null) => {
    setActiveCardId(offerId);
  };
  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div
      className={cn('page page--gray', 'page--main', {
        'page__main--index-empty': !currentCityOffers.length,
      })}
    >
      <Helmet>
        <title>Home page: Best rent choice in {currentCity.name}</title>
      </Helmet>
      {isLoading && <Preloader />}
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CityMenu currentCity={currentCity} />
          </section>
        </div>
        <div className='cities'>
          {currentCityOffers.length && (
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>
                  {currentCityOffers.length} places to stay in{' '}
                  {currentCity.name}
                </b>
                <Sorting />
                <div className='cities__places-list places__list tabs__content'>
                  <List
                    offers={currentCityOffers}
                    onMouseCardEnter={handleMouseEnter}
                    onMouseCardLeave={handleMouseLeave}
                    activeCardId={activeCardId}
                    cardClassName='cities'
                  />
                </div>
              </section>
              <div className='cities__right-section'>
                <Map
                  city={currentCity}
                  offers={currentCityOffers}
                  activeOfferId={activeCardId}
                  mapHeight={794}
                  mapClassName='cities__map'
                />
              </div>
            </div>
          )}
          {!currentCityOffers.length && (
            <div className='cities__places-container cities__places-container--empty container'>
              <section className='cities__no-places'>
                <div className='cities__status-wrapper tabs__content'>
                  <b className='cities__status'>No places to stay available</b>
                  <p className='cities__status-description'>
                    We could not find any property available at the moment in{' '}
                    {currentCity.name}
                  </p>
                </div>
              </section>
              <div className='cities__right-section'></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
