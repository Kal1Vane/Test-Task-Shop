import { nanoid } from "nanoid";
import { FilterName } from "../../const";

function Filter() :JSX.Element {
  return (
    <div className="filter__container">
      <ul className="filter__list">
        {Object.values(FilterName).map((name) => (
          <li key={nanoid(10)} className="filter__item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
