import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const DivisionData = () => {
  const [division, setDivision] = useState([]);
  const loadsDivision = async () => {
    const response = await fetch("http://localhost:3001/division");
    const resData = await response.json();
    if (resData.con) {
      setDivision(resData.result);
      console.log(resData);
    } else {
      console.log(resData);
    }
  };
  useEffect(() => {
    loadsDivision();
  }, []);

  return (
    <>
      <h2> Tours Division Data !!</h2>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          {division.length > 0 &&
            division.map((data) => (
              <Col md={4} lg={6} key={data._id}>
                <Link to={`division/${data._id}`}>
                  <Card
                    className="card"
                    hoverable
                    cover={
                      <img
                        src={`http://localhost:3001/uploads/${data.image}`}
                        className="img"
                        alt={data.image}
                      />
                    }
                  >
                    <Meta title={data.division} />
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default DivisionData;
