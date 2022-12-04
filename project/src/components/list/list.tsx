import { memo } from 'react';
import Card from '../../components/card/card';
import { OfferType } from '../../types/offer';

type ListProps = {
  offers: OfferType[];
  onMouseCardEnter?:(id:number | null) => void;
  activeCardId:number | null;
  cardClassName:string;
};

function List(props: ListProps): JSX.Element {
  const { offers, onMouseCardEnter, activeCardId, cardClassName} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          handleCardMouseHover={onMouseCardEnter}
          isActive={offer.id === activeCardId}
          cardClassName={cardClassName}
        />
      ))}
    </>
  );
}

export default memo(List);
