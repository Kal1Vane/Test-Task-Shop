
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeActiveCard, changeFilter, removeCards } from "../../store/card-store/card-store";
import { getFilteredCards } from "../../store/card-store/selectors";
import ItemCard from "../item-card/item-card";
import './list-card.css';

function ListCard() :JSX.Element{
  const currentCard = useAppSelector(getFilteredCards)
  const dispatch = useAppDispatch();

  function onClickList (evt : React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = evt.target as HTMLElement;
    if(target.tagName === 'BUTTON'){
      const category = target.dataset.category;
      dispatch(changeFilter(category))
    } else if(target.tagName === 'ARTICLE'){
      const id = target.dataset.id;
      dispatch(changeActiveCard(id));
    }
  }
  function onPressKeyDelete(evt: { key: string; }){
    if (evt.key === 'Delete' || evt.key === 'Backspace'){
      dispatch(removeCards());
    }
  }
  useEffect(() => {
    document.addEventListener('keydown',onPressKeyDelete);
    return () => {
      document.removeEventListener('keydown', onPressKeyDelete);
    }
  }, [])
  
  return (
    <section
     className="main__places">
      <ul className="place-card__list"
      onClick={onClickList}>
        {currentCard.map((card) => {
          return <ItemCard key={card.id} card={card} />
        })}
     </ul>
     <div className="main__places-button-wrapper">
        <button type="button" className="main__places-button" >load more</button>
     </div>
    </section>

  )
}
export default ListCard;
