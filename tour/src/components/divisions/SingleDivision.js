import React from "react";
import { connect } from "react-redux";
import { fetchSingleDivision } from "../../actions";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

class SingleDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("details page", id);
    this.props.fetchSingleDivision(id);
  }

  render() {
    const { singleDivision } = this.props;
    console.log("Rendering Data Division Page>>", singleDivision);

    if (!singleDivision) {
      return <div>Loading...</div>;
    } else {
      const famousPlaces = singleDivision?.famousplace?.map((famousplace) => (
        <>
          <div key={famousplace._id}>
            <div>
              <Link to={`/famousplaces/${famousplace._id}`}>
                <strong>{famousplace.name}</strong>
              </Link>
            </div>
            <div>{famousplace.about}</div>
          </div>
        </>
      ));
      // return <>{JSON.stringify(singleDivision)}
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
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    divisions: state.divisionReducer.divsions,
    singleDivision: state.divisionReducer.singleDivision,
  };
};

export default connect(mapStateToProps, { fetchSingleDivision })(
  SingleDivision
);
