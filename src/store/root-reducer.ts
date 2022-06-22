import { combineReducers } from "@reduxjs/toolkit";
import { NameProcess } from "../const";
import { cardProcess } from "./card-store/card-store";

export const rootReducer = combineReducers({
  [NameProcess.card] : cardProcess.reducer,
})