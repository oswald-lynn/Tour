import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  {
    console.log(props);
  }
  return (
    <div>
      <h4> Famous Places:</h4>
      {props.placeDetails.map((info) => (
        <div key={info.id}>
          <Link to={`famousPlaces/${info.id}`}>
            <p>{info.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Details;
