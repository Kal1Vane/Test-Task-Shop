import { FilterName, NameProcess } from "../../const"
import { PlacesCard } from "../../types"
import { State } from "../../types/state";

export const getPlacesCard = (state: State) : PlacesCard[] => state[NameProcess.card].currentPlacesCard;
export const getFilter  = (state: State) : FilterName => state[NameProcess.card].currentFilter;
export const getFilteredCards = (state : State) : PlacesCard[] => state[NameProcess.card].filteredCards;
export const getRenderedCards = (state: State) : PlacesCard[] => state[NameProcess.card].renderedCards;

