import { memo, useState } from 'react';
import { SortingOptions } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import cn from 'classnames';
import { setSortOffersByAction } from '../../store/offer-process/offer-process';
import { getCurrentSortOffersBy } from '../../store/offer-process/selectors';

function Sorting(): JSX.Element {

  const dispatch = useAppDispatch();
  const activeSortOffersBy = useAppSelector(getCurrentSortOffersBy);
  const [isSortOpen, setSortOpen] = useState<boolean>(false);

  return (
    <form className='places__sorting' action='#' method='get' onClick={()=>setSortOpen(!isSortOpen)}>
      <span className='places__sorting-caption'>Sort by&nbsp;</span>
      <span className='places__sorting-type' tabIndex={0}>
        {activeSortOffersBy}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isSortOpen,
        })}
      >
        {Object.entries(SortingOptions).map(([key,value]) => (
          <li
            className={cn('places__option', {
              'places__option--active': value === activeSortOffersBy,
            })}
            tabIndex={0}
            key={key}
            onClick={() => {
              setSortOpen(!isSortOpen);
              dispatch(setSortOffersByAction(value));
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default memo(Sorting);
