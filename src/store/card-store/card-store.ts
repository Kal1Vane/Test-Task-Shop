import { createSlice } from "@reduxjs/toolkit"
import { FilterName, NameProcess } from "../../const"
import { MakeFakePlaceCards } from "../../mocks"
import { CardProcess } from "../../types/state"


const initialState : CardProcess = {
  currentPlacesCard : MakeFakePlaceCards(),
  currentFilter: FilterName.ShowAll,
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
    },
  }
});

export const {changeActiveCard,removeCards,changeFilter} = cardProcess.actions;