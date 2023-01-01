import React from "react";
import { Router, Route } from "react-router-dom";
import ToursData from "./divisions/ToursData";
import ToursDivision from "./divisions/ToursDivision";
import history from "../history";
import FamousPlace from "./divisions/FamousPlace";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={ToursData}></Route>
        <Route path="/division/:id" exact component={ToursDivision}></Route>
        <Route path="/famousplaces/:id" exact component={FamousPlace}></Route>
      </Router>
    </>
  );
};

export default App;
