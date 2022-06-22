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
    >
      <article className="place-card__main" data-id={id}> 
        <img className="place-card__image" src={image} alt={title} width="100%" height="100%" />
        <button data-category={category} className="place-card__filter-button" type="button">{category}</button>
        <h3 className="place-card__name">{title}</h3>
      </article>
    </li>
  )
}
export default ItemCard;
