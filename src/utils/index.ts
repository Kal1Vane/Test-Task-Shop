import { FilterName } from "../const";
import { PlacesCard } from "../types";


export const getFilterCards = (cards: PlacesCard[] , filterName : FilterName) => {
  switch (filterName){
    case FilterName.ShowAll :
      return [...cards];
    case FilterName.Branding :
      return cards.filter((card) => card.category === FilterName.Branding);
    case FilterName.Design :
      return cards.filter((card) => card.category === FilterName.Design);
    case FilterName.Illustration :
      return cards.filter((card) => card.category === FilterName.Illustration);
    case FilterName.Motion :
      return cards.filter((card) => card.category === FilterName.Motion);
  }
}