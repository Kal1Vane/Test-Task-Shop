import { nanoid } from "nanoid";
import { FilterName } from "../../const";
import './filter.css';

function Filter() :JSX.Element {
  return (
    <div className="filter__container">
      <ul className="filter__list">
        {Object.values(FilterName).map((name) => (
          <li key={nanoid(10)} className="filter__item">
            <button className="filter__item-button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
