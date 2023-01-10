import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="errtext">
        <h2>404</h2>
        <h3>Page Not Found !!</h3>
        <p>The resource requested could not be found on this server!</p>

        <button>
          <Link to="/">Go Back Home</Link>
        </button>
      </div>
    </>
  );
};

export default Errorpage;
