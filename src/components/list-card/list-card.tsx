import ItemCard from "../item-card/item-card";
import './list-card.css';

function ListCard() :JSX.Element{

  return (
    <section className="main__places">
      <ul className="place-card__list">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
     </ul>
     <div className="main__places-button-wrapper">
        <button type="button" className="main__places-button" >load more</button>
     </div>
    </section>

  )
}
export default ListCard;
