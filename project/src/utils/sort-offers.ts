import { SortingOptions } from '../const';
import { OfferType } from '../types/offer';

export const sortOffers = (
  offers: OfferType[],
  currentSortOffersBy: string
) => {
  const sortedOffers: OfferType[] = [...offers];

  switch (currentSortOffersBy) {
    case SortingOptions.PRICE_ASC:
      return sortedOffers.sort((a, b) => a.price - b.price);

    case SortingOptions.PRICE_DESC:
      return sortedOffers.sort((a, b) => b.price - a.price);

    case SortingOptions.RATING_DESC:
      return sortedOffers.sort((a, b) => b.rating - a.rating);

    case SortingOptions.POPULAR:
    default:
      return sortedOffers;
  }
};
