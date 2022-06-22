import { PlacesCard } from '../../types';
import './item-card.css';

type PropsPlacesCard = {
  card: PlacesCard
};

function ItemCard(props: PropsPlacesCard) :JSX.Element{
  const {title,isActive,image,id,category} = props.card;

  return (
    <li 
    className={`place-card ${isActive && 'active'}`}
    data-id={id}>
      <article className="place-card__main"> 
        <img className="place-card__image" src={image} alt={title} width="100%" height="100%" />
        <button data-id={id} className="place-card__filter-button" type="button">{category}</button>
        <h3 className="place-card__name">{title}</h3>
      </article>
    </li>
  )
}
export default ItemCard;
