import { PlacesCard } from ".";
import { FilterName } from "../const";
import { store } from "../store";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CardProcess = {
  currentPlacesCard : PlacesCard[],
  currentFilter : FilterName,
  filteredCards :PlacesCard[],
  renderedCards : PlacesCard[],
  renderCardsCount : number,
}