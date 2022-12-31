import React from "react";
import { Router, Route } from "react-router-dom";
import ToursData from "./division/ToursData";
import ToursDivision from "./division/ToursDivision";
import history from "../history";
import Details from "./division/Details";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={ToursData}></Route>
        <Route path="/division/:id" exact component={ToursDivision}></Route>

        <Route path="/famousPlaces/:id" exact component={Details}></Route>
      </Router>
    </>
  );
};

export default App;
