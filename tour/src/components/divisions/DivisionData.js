import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDivision } from "../../actions";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const DivisionData = () => {
  const dataDivisions = useSelector((state) => state.dataDivisions);
  console.log("Reducer Data ", dataDivisions);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadsDivision = async () => {
      dispatch(fetchDivision(dataDivisions));
    };
    loadsDivision();
  }, []);

  return (
    <>
      <h2> Tours Division Data !!</h2>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          {dataDivisions.divisions.length > 0 &&
            dataDivisions.divisions.map((data) => (
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
