import Card from '../../components/card/card';
import { OfferType } from '../../types/offer';

type ListProps = {
  offers: OfferType[];
  onMouseCardEnter?:(id:number) => void;
  onMouseCardLeave?:() => void;
  activeCardId:number | null;
  cardClassName:string;
};

function List(props: ListProps): JSX.Element {
  const { offers, onMouseCardEnter, onMouseCardLeave, activeCardId, cardClassName} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          handleCardMouseEnter={onMouseCardEnter}
          handleCardMouseLeave={onMouseCardLeave}
          isActive={offer.id === activeCardId}
          cardClassName={cardClassName}
        />
      ))}
    </>
  );
}

export default List;
