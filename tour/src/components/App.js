import React from "react";
import { Router, Route } from "react-router-dom";
import ToursData from "./division/ToursData";
import ToursDivision from "./division/ToursDivision";
import FamousPlacesDetails from "./division/FamousPlacesDetails";
import history from "../history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={ToursData}></Route>
        <Route path="/:id" exact component={ToursDivision}></Route>
        <Route
          path="/FamousPlacesDetails/:id"
          exact
          component={FamousPlacesDetails}
        ></Route>
      </Router>
    </>
  );
};

export default App;
