import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row } from "antd";

const SingleDivision = () => {
  const [singleDivision, setSingleDivision] = useState({});
  const { id } = useParams();

  const loadsSingleDivision = async () => {
    const response = await fetch(`http://localhost:3001/division/${id}`);
    const resData = await response.json();
    if (resData.con) {
      setSingleDivision(resData.result);
      console.log(resData);
    } else {
      console.log(resData);
    }
  };
  useEffect(() => {
    loadsSingleDivision();
  }, []);

  const famousPlaces = singleDivision?.famousplace?.map((famousplace) => (
    <>
      <div key={famousplace.id}>
        <div>
          <Link to={`/famousplaces/${famousplace._id}`}>
            <strong>{famousplace.name}</strong>
          </Link>
          <p>{famousplace.about}</p>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <Row key={singleDivision._id}>
        <Col sm={20} md={22} lg={24}>
          <h1>{singleDivision.division}</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={4} md={6} lg={8}>
          {
            <img
              src={`http://localhost:3001/uploads/${singleDivision.image}`}
              className="img"
              alt={singleDivision.image}
            />
          }
        </Col>
        <Col md={14} lg={16} className="middle text">
          <h2> About </h2>
          <div>{singleDivision.body}</div>
          <h2>Famous Places</h2>
          <div>{famousPlaces}</div>
        </Col>
      </Row>
    </>
  );
};

export default SingleDivision;
