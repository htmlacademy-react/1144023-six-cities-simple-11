import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offer';
import { MouseEvent } from 'react';
import cn from 'classnames';
import { getRatingWidth } from '../../utils/utils';

type CardProps = {
  offer: OfferType;
  handleCardMouseHover?: (id: number | null) => void;
  isActive: boolean;
  cardClassName:string;
};

function Card({
  offer,
  handleCardMouseHover,
  isActive,
  cardClassName
}: CardProps): JSX.Element {

  return (
    <article
      className={cn('place-card', `${cardClassName}__card`, { active: isActive })}
      id={`offer-${offer.id}`}
      onMouseEnter={(event: MouseEvent<HTMLElement>) =>
        handleCardMouseHover && handleCardMouseHover(offer.id)}
      onMouseLeave={(event: MouseEvent<HTMLElement>) =>
        handleCardMouseHover && handleCardMouseHover(null)}
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
            <span style={{ width: getRatingWidth(offer.rating, false) }}></span>
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
