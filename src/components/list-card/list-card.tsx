
import { useAppSelector } from "../../hooks";
import { getPlacesCard } from "../../store/card-store/selectors";
import ItemCard from "../item-card/item-card";
import './list-card.css';

function ListCard() :JSX.Element{
  const currentCard = useAppSelector(getPlacesCard)
  // console.log(currentCard);

  return (
    <section className="main__places">
      <ul className="place-card__list">
        {currentCard.map((card) => {
          return <ItemCard card={card} />
        })}
     </ul>
     <div className="main__places-button-wrapper">
        <button type="button" className="main__places-button" >load more</button>
     </div>
    </section>

  )
}
export default ListCard;
