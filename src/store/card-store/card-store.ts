import { createSlice } from "@reduxjs/toolkit"
import { getFilterCards } from "../../utils"
import { FilterName, NameProcess } from "../../const"
import { CardProcess } from "../../types/state"


const initialState : CardProcess = {
  currentPlacesCard : [],
  currentFilter: FilterName.ShowAll,
  filteredCards : [],
}

export const cardProcess = createSlice({
  name: NameProcess.card,
  initialState,
  reducers : {
    changeActiveCard : (state,action) => {
      console.log(state);
      state.currentPlacesCard.forEach((card) => {
        if (action.payload === card.id){
          card.isActive = !card.isActive
        }
      })
    },
    removeCards : (state) => {
      state.currentPlacesCard = state.currentPlacesCard.filter((card) => card.isActive !== true);
    },
    changeFilter : (state,action) => {
      const choiseFilter = Object.values(FilterName).find((filter) => filter === action.payload);
      choiseFilter ? state.currentFilter = choiseFilter : state.currentFilter = FilterName.ShowAll;
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
    },
    setPlacesCard : (state,action) => {
      state.currentPlacesCard = action.payload;
      state.filteredCards = getFilterCards(state.currentPlacesCard,state.currentFilter);
    }
  }
});

export const {changeActiveCard,removeCards,changeFilter,setPlacesCard} = cardProcess.actions;