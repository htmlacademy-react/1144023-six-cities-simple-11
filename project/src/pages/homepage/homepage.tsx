import Header from '../../components/header/header';
import List from '../../components/list/list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useCallback, useState } from 'react';
import CityMenu from '../../components/city-menu/city-menu';
import useAppSelector from '../../hooks/useAppSelector';
import cn from 'classnames';
import Sorting from '../../components/sorting/sorting';
import Preloader from '../../components/preloader/preloader';
import {
  getCurrentCity,
  getCurrentCitySortedOffers,
  getIsOffersLoading,
} from '../../store/offer-process/selectors';
import ResultsEmpty from '../../components/results-empty/results-empty';

function Homepage(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const currentCity = useAppSelector(getCurrentCity);
  const currentCityOffers = useAppSelector(getCurrentCitySortedOffers);

  const handleCardMouseHover = useCallback((offerId: number | null) => {
    setActiveCardId(offerId);
  }, []);

  return (
    <div
      className={cn('page page--gray', 'page--main', {
        'page__main--index-empty': !currentCityOffers.length,
      })}
    >
      <Helmet>
        <title>Home page: Best rent choice in {currentCity.name}</title>
      </Helmet>
      {isOffersLoading && <Preloader />}
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CityMenu currentCity={currentCity} />
          </section>
        </div>
        <div className='cities'>
          {currentCityOffers.length ? (
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
                    onMouseCardEnter={handleCardMouseHover}
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
          ) : (
            <ResultsEmpty currentCity={currentCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
