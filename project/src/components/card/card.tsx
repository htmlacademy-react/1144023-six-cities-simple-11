import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offer';
import { MouseEvent } from 'react';
import cn from 'classnames';

type CardProps = {
  offer: OfferType;
  handleCardMouseEnter?: (id: number) => void;
  handleCardMouseLeave?: () => void;
  isActive: boolean;
  cardClassName:string;
};

function Card({
  offer,
  handleCardMouseEnter,
  handleCardMouseLeave,
  isActive,
  cardClassName
}: CardProps): JSX.Element {

  return (
    <article
      className={cn('place-card', `${cardClassName}__card`, { active: isActive })}
      id={`offer-${offer.id}`}
      onMouseEnter={(event: MouseEvent<HTMLElement>) =>
        handleCardMouseEnter && handleCardMouseEnter(offer.id)}
      onMouseLeave={(event: MouseEvent<HTMLElement>) =>
        handleCardMouseLeave && handleCardMouseLeave()}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
