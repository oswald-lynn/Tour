import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Collapse } from "antd";
const { Panel } = Collapse;

const FamousPlace = () => {
  const [famousPlace, setFamousPlace] = useState({});
  const { id } = useParams();

  const loadsFamousPlace = async () => {
    const response = await fetch(`http://localhost:3001/famousplace/${id}`);
    const resData = await response.json();
    if (resData.con) {
      setFamousPlace(resData.result);
      console.log(resData.result);
    } else {
      console.log(resData);
    }
  };
  useEffect(() => {
    loadsFamousPlace();
  }, [id]);

  return (
    <>
      <h2>Famous Page Detail</h2>

      {famousPlace.length > 0 &&
        famousPlace.map((place) => (
          <div key={place.id}>
            {place.name}
            {place.about}
          </div>
        ))}
      <Row>
        <Col md={22} lg={24} className="about">
          <h2>Famous Page Detail</h2>
          <h3>{famousPlace.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={12} className="about text">
          <div>
            <h3>About</h3>
            {famousPlace.about}
          </div>
          <div>
            <h3>Transportation</h3>
            {famousPlace.transportation}
          </div>
        </Col>
        <Col md={10} lg={12} className="middle">
          <div>
            <h3> Hotels </h3>
            <Collapse accordion>
              {famousPlace?.hotels?.map((hotel) => (
                <Panel header={hotel.name} key={hotel._id}>
                  <b>Address</b>: {hotel.address} <br />
                  <b>Phone</b> :{hotel.phone}
                </Panel>
              ))}
            </Collapse>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FamousPlace;
