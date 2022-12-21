import React from "react";

const Details = (props) => {
  return (
    <div>
      {/* {console.log(props.famousPlaceDetails)} */}

      {props.famousPlaceDetails.map((info, index) => (
        <div key={index}>
          <p> Famous Places:</p>
          <p>
            {info.name} <br /> {info.about} <br /> {info.transportation}
          </p>
          <p>Hotels</p>
          <ul>
            {Object.values(info.hotels).map((hotel, index) => (
              <li key={index}>
                Name :{hotel.name} <br /> Address: {hotel.address} <br /> Phone:
                {hotel.phone}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Details;
