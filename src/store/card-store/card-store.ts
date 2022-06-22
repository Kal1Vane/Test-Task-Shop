import { createSlice } from "@reduxjs/toolkit"
import { getFilterCards } from "../../utils"
import { CARD_COUNT_PER_STEP, FilterName, NameProcess } from "../../const"
import { CardProcess } from "../../types/state"


const initialState : CardProcess = {
  currentPlacesCard : [],
  currentFilter: FilterName.ShowAll,
  filteredCards : [],
  renderedCards : [],
  renderCardsCount : CARD_COUNT_PER_STEP,
}

export const cardProcess = createSlice({
  name: NameProcess.card,
  initialState,
  reducers : {
    changeActiveCard : (state,action) => {
      state.currentPlacesCard.forEach((card) => {
        if (action.payload === card.id){
          card.isActive = !card.isActive
        }
      })
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
      state.renderedCards = state.filteredCards.slice(0, state.renderCardsCount);
    },
    removeCards : (state) => {
      state.currentPlacesCard = state.currentPlacesCard.filter((card) => card.isActive !== true);
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
      state.renderedCards = state.filteredCards.slice(0, state.renderCardsCount);
    },
    changeFilter : (state,action) => {
      const choiseFilter = Object.values(FilterName).find((filter) => filter === action.payload);
      choiseFilter ? state.currentFilter = choiseFilter : state.currentFilter = FilterName.ShowAll;
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
      state.renderCardsCount = CARD_COUNT_PER_STEP;
      state.renderedCards = state.filteredCards.slice(0, state.renderCardsCount);
    },
    setPlacesCard : (state,action) => {
      state.currentPlacesCard = action.payload;
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
      state.renderedCards = state.filteredCards.slice(0, state.renderCardsCount);
    },
    changeRenderCardsCount : (state) => {
      state.renderCardsCount += CARD_COUNT_PER_STEP;
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
      state.renderedCards = state.filteredCards.slice(0, state.renderCardsCount);
    }
  }
});

export const {changeActiveCard,removeCards,changeFilter,setPlacesCard,changeRenderCardsCount} = cardProcess.actions;