import React from "react";
import { connect } from "react-redux";
import { fetchFamousPlace } from "../../actions";
import { Col, Row, Collapse } from "antd";
const { Panel } = Collapse;

class FamousPlace extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("Famous Place page", id);
    this.props.fetchFamousPlace(id);
  }

  render() {
    //console.log(this.props.datas.famousPlaces);
    const { famousPlace } = this.props;
    console.log("Rendering famousPage Data>>", famousPlace);

    if (!famousPlace) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
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
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Famoust Page Data", state);

  return {
    singleDivision: state.divisionReducer.singleDivision,
    famousPlace: state.divisionReducer.famousPlace,
  };
};

export default connect(mapStateToProps, { fetchFamousPlace })(FamousPlace);
