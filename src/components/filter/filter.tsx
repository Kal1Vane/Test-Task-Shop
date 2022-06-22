import { nanoid } from "nanoid";
import { FilterName } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeFilter } from "../../store/card-store/card-store";
import { getFilter } from "../../store/card-store/selectors";
import './filter.css';

function Filter() :JSX.Element {
  const currentFilter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  function onClickChangeFilter(evt : React.MouseEvent<HTMLDivElement, MouseEvent>){
    const target = evt.target as HTMLElement;
    if (target.tagName !== 'BUTTON'){return;}
    if (target.classList.contains('filter-mobail__select-button')){
      const popUp = document.querySelector('.filter__container');
      (popUp as HTMLElement).classList.toggle('active');
    } else if (target.classList.contains('filter__item-button')){
      const popUp = document.querySelector('.filter__container');
      (popUp as HTMLElement).classList.remove('active');
      const name = target.getAttribute('data-name');
      dispatch(changeFilter(name));
    }
  }

  return (
    <div onClick={onClickChangeFilter} className="filter__container">
      <div className="filter-mobail__wrapper-select">
        <button type="button" className="filter-mobail__select-button">{currentFilter}</button>
      </div>
      <ul className="filter__list"
      >
        {Object.values(FilterName).map((name) => (
          <li 
          key={nanoid(10)} 
          className={`filter__item ${currentFilter === name ? 'active' : ''}`}
          >
            <button 
            className="filter__item-button"
            data-name={name}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
