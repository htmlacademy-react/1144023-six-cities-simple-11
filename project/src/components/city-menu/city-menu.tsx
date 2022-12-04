import { Link } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import { memo, MouseEvent, useCallback } from 'react';
import { Cities } from '../../const';
import { CityType } from '../../types/city';
import cn from 'classnames';
import { AppRoute } from '../../const';
import { setCityAction } from '../../store/offer-process/offer-process';

type CityMenuProps = {
  currentCity: CityType;
};

function CityMenu({ currentCity }: CityMenuProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeCityClick = useCallback((
    event: MouseEvent<HTMLAnchorElement>,
    city: CityType
  ) => {
    event.preventDefault();
    dispatch(setCityAction(city));
  }, [dispatch]);

  return (
    <ul className='locations__list tabs__list'>
      {Cities.map((city) => (
        <li className='locations__item' key={`city-${city.name}`}>
          <Link
            className={cn('locations__item-link', 'tabs__item', {
              'tabs__item--active': city === currentCity,
            })}
            to={AppRoute.Main}
            onClick={(e) => handleChangeCityClick(e, city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(CityMenu);
