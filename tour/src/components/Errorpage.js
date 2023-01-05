import React from "react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="errtext">
        <h2>404</h2>
        <h3>Page Not Found !!</h3>
        <p>The resource requested could not be found on this server!</p>
        <button onClick={() => navigate("/")}> Go Back Home </button>
      </div>
    </>
  );
};

export default Errorpage;
