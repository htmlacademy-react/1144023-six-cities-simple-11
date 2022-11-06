import { useState } from 'react';
import Card from '../../components/card/card';
import { OfferType } from '../../types/offer';

type ListProps = {
  offers: OfferType[];
};

function List({ offers }: ListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>();

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <Card
          hotel={offer}
          key={offer.id}
          handleCardMouseOver={() => {
            setActiveCard(offer.id);
          }}
          handleCardMouseOut={() => {
            setActiveCard(null);
          }}
          isActive={offer.id === activeCard}
        />
      ))}
    </div>
  );
}

export default List;
