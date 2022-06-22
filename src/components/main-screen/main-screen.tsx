import { Fragment } from "react";
import Filter from "../filter/filter";
import ListCard from "../list-card/list-card";
import './main-screen.css';
function MainScreen() :JSX.Element {

  return (
    <main className="page__main">
      <div className="main__title-wrapper">
        <h1 className="main__title">Portfolio</h1>
        <p className="main__title-description">
          Agency provides a full service range including technical skills, design, business understanding.
        </p>
      </div>
      <div className="main__content-wrapper">
        <Filter />
        <ListCard />
      </div>
    </main>
  )
}

export default MainScreen;
