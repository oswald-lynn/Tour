import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDivision } from "../../actions";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

class DivisionData extends React.Component {
  componentDidMount() {
    this.props.fetchDivision();
  }

  render() {
    const { divisions } = this.props;
    //console.log("Rendering Data", this.props.datas);
    if (
      divisions.length === 0 ||
      divisions === "" ||
      divisions === null ||
      divisions === undefined
    ) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <h2> Tours Division Data !!</h2>
          <div className="site-card-border-less-wrapper">
            <Row gutter={16}>
              {this.props.divisions.map((data) => (
                <Col span={6} key={data._id}>
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
    }
  }
}

const mapStateToProps = (state) => {
  console.log("ToursData Page>>", state);
  return { divisions: state.divisionReducer.divisions };
};

export default connect(mapStateToProps, { fetchDivision })(DivisionData);
