
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeActiveCard, changeFilter, changeRenderCardsCount, removeCards } from "../../store/card-store/card-store";
import { getFilter, getFilteredCards, getRenderedCards } from "../../store/card-store/selectors";
import ItemCard from "../item-card/item-card";
import './list-card.css';

function ListCard() :JSX.Element{
  const currentFilteredCards = useAppSelector(getFilteredCards)
  const renderCards = useAppSelector(getRenderedCards);
  const currentFilter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();
  const [isLoadMore,setLoadMore] = useState<boolean>(true);

  useEffect(() => {
    if(currentFilteredCards.length > renderCards.length){
      setLoadMore(true);
    } else if(currentFilteredCards.length === renderCards.length){
      setLoadMore(false);
    }
  },[currentFilteredCards,renderCards])

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

  if (renderCards.length === 0) {
    return (
    <section className="main__places empty">
      <h3 className="main__places-title">Empty card {currentFilter}</h3>
     </section>)
  }

  return (
    <section
     className="main__places">
      <ul className="place-card__list"
      onClick={onClickList}>
        {renderCards.map((card) => {
          return <ItemCard key={card.id} card={card} />
        })}
     </ul>

     {isLoadMore ? 
        <div className="main__places-button-wrapper">
          <button onClick={() => dispatch(changeRenderCardsCount())} type="button" className="main__places-button" >load more</button>
       </div>
       : ''
     }
    </section>

  )
}
export default ListCard;
