import { Link } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import { MouseEvent } from 'react';
import { cities } from '../../mocks/cities';
import { CityType } from '../../types/city';
import cn from 'classnames';
import { AppRoute } from '../../const';
import { setCityAction } from '../../store/action';

type CityMenuProps = {
  currentCity: CityType;
};

function CityMenu({ currentCity }: CityMenuProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleChangeCity = (
    event: MouseEvent<HTMLAnchorElement>,
    city: CityType
  ) => {
    event.preventDefault();
    dispatch(setCityAction(city));
  };

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => (
        <li className='locations__item' key={`city-${city.name}`}>
          <Link
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': city === currentCity,
            })}
            to={AppRoute.Main}
            onClick={(e) => handleChangeCity(e, city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityMenu;
