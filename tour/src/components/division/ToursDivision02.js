import React from "react";
import { useParams } from "react-router-dom";

const ToursDivision = (props) => {
  console.log("div>>>", props);

  const params = useParams();
  const divisionId = params.id;
  console.log("divi>>>>>", divisionId);
  return (
    <>
      <h2> Hello </h2>
    </>
  );
};

export default ToursDivision;
