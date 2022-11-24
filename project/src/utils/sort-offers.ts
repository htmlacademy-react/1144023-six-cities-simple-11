import {sortingOptions} from '../const';
import {OfferType} from '../types/offer';

export const sortOffers = (offers: OfferType[], currentSortOffersBy: string) => {
  const sortedOffers: OfferType[] = offers;

  switch (currentSortOffersBy) {
    case sortingOptions.PRICE_ASC:
      return sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case sortingOptions.PRICE_DESC:
      return sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case sortingOptions.RATING_DESC:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    case sortingOptions.POPULAR:
    default:
      return sortedOffers;
  }
};
