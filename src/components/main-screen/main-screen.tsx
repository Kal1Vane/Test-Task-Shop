import { Fragment } from "react";
import Filter from "../filter/filter";
import ListCard from "../list-card/list-card";

function MainScreen() :JSX.Element {

  return (
    <Fragment>
      <Filter />
      <ListCard />
    </Fragment>
  )
}

export default MainScreen;
