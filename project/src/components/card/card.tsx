import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offer';
import { MouseEvent } from 'react';
import cn from 'classnames';

type CardProps = {
  hotel: OfferType;
  handleCardMouseOver: (id: number) => void;
  handleCardMouseOut: () => void;
  isActive: boolean;
};

function Card({
  hotel,
  handleCardMouseOver,
  handleCardMouseOut,
  isActive,
}: CardProps): JSX.Element {
  return (
    <article
      className={cn('cities__card place-card', { active: isActive })}
      id={`hotel-${hotel.id}`}
      onMouseOver={(event: MouseEvent<HTMLElement>) =>
        handleCardMouseOver(hotel.id)}
      onMouseOut={(event: MouseEvent<HTMLElement>) => handleCardMouseOut()}
    >
      {hotel.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`${AppRoute.Room}/${hotel.id}`}>
          <img
            className='place-card__image'
            src={hotel.images[0]}
            width='260'
            height='200'
            alt={hotel.title}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{hotel.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${hotel.rating * 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Room}/${hotel.id}`}>{hotel.title}</Link>
        </h2>
        <p className='place-card__type'>{hotel.type}</p>
      </div>
    </article>
  );
}

export default Card;
