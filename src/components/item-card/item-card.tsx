import './item-card.css';

function ItemCard() :JSX.Element{
  return (
    <li className="place-card">
      <article className="place-card__main"> 
        <img className="place-card__image" src="img/05.png" alt="" width="100%" height="100%" />
        <button className="place-card__filter-button" type="button">Design</button>
        <h3 className="place-card__name">Sofa</h3>
      </article>
    </li>
  )
}
export default ItemCard;
