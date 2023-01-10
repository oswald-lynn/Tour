import React from "react";
import { Routes, Route } from "react-router-dom";
import DivisionData from "./divisions/DivisionData";
import SingleDivision from "./divisions/SingleDivision";
import FamousPlace from "./divisions/FamousPlace";
import Errorpage from "./Errorpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DivisionData />}></Route>
        <Route path="/division/:id" element={<SingleDivision />}></Route>
        <Route path="/famousplaces/:id" element={<FamousPlace />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
    </>
  );
};

export default App;
