import Card from '../../components/card/card';
import { OfferType } from '../../types/offer';

type ListProps = {
  offers: OfferType[];
  onMouseCardEnter:(id:number) => void;
  onMouseCardLeave:() => void;
  activeCardId:number | null;
};

function List({ offers, onMouseCardEnter, onMouseCardLeave, activeCardId}: ListProps): JSX.Element {

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <Card
          hotel={offer}
          key={offer.id}
          handleCardMouseEnter={onMouseCardEnter}
          handleCardMouseLeave={onMouseCardLeave}
          isActive={offer.id === activeCardId}
        />
      ))}
    </div>
  );
}

export default List;
