import React from "react";
import { Router, Route } from "react-router-dom";
import DivisionData from "./divisions/DivisionData";
import SingleDivision from "./divisions/SingleDivision";
import history from "../history";
import FamousPlace from "./divisions/FamousPlace";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={DivisionData}></Route>
        <Route path="/division/:id" exact component={SingleDivision}></Route>
        <Route path="/famousplaces/:id" exact component={FamousPlace}></Route>
      </Router>
    </>
  );
};

export default App;
