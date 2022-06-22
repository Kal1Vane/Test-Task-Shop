import { FilterName, MAX_PLACES_CARD } from "../const";
import { PlacesCard } from "../types";

function getRandomInt(min = 0 , max = 1) : number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const makeFakeCategory = () : FilterName => {
  const arrayCategory = Object.values(FilterName);
  const numberRandom = getRandomInt(0, arrayCategory.length - 1);
  return arrayCategory[numberRandom];
}

export const makeFakeTitle = () : string => {
  const arrayTitle = ['SOFA','KeyBoard','Work Media','DDDone','Abstract','HandP','Architect','Calc','Sport'];
  const numberRandom = getRandomInt(0, arrayTitle.length - 1);
  return arrayTitle[numberRandom];
}

export const makeFakeImage = () : string => {
  return `img/0${getRandomInt(1,9)}.png`;
}
export const makeFakePlacesCard = () : PlacesCard => ({
    title: makeFakeTitle(),
    category : makeFakeCategory(), 
    image : makeFakeImage(),
    isActive: false,
})

export const MakeFakePlaceCards = () : PlacesCard[]  => {
  const array : PlacesCard[] = [];
  for (let i = 0; i < MAX_PLACES_CARD;i++){
    array.push(makeFakePlacesCard());
  }
  return [...array];
}
