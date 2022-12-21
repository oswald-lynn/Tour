import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  return (
    <div>
      <h4> Famous Places:</h4>
      {props.dd.map((info, index) => (
        <div key={index}>
          <p>{info.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
