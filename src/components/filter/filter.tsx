import { nanoid } from "nanoid";
import { FilterName } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeFilter } from "../../store/card-store/card-store";
import { getFilter } from "../../store/card-store/selectors";
import './filter.css';

function Filter() :JSX.Element {
  const currentFilter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  function onClickChangeFilter(evt : React.MouseEvent<HTMLUListElement, MouseEvent>){
    const target = evt.target as HTMLElement;
    if (target.tagName !== 'BUTTON'){return;}
    const name = target.getAttribute('data-name');
    dispatch(changeFilter(name));
  }
  
  return (
    <div className="filter__container">
      <ul className="filter__list"
      onClick={onClickChangeFilter}
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
