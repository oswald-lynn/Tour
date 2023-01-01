import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchdatas } from "../../actions";
//import { Card, Col, Row } from "antd";
//import ToursDivision from "./ToursDivision";
//const { Meta } = Card;

class ToursData extends React.Component {
  componentDidMount() {
    this.props.fetchdatas();
  }
  renderList() {}

  render() {
    console.log("Rendering Data>>", this.props);
    const { divisions } = this.props;
    //console.log("Rendering Data >>", datas);
    if (
      divisions.length === 0 ||
      divisions === "" ||
      divisions === undefined ||
      divisions === null
    ) {
      return <div> Loading ... </div>;
    } else {
      //const division = d[0];
      //console.log("Image test", division);
      //const famousPlaces = division.famousplace;
      //console.log("Famous Place 1 >>", famousPlaces);

      //const famousPlaces1 = division[1].famousplace;
      //console.log("Famous Place >>", famousPlaces1);

      const dataDivision = divisions.map((data) => {
        return (
          <div key={data._id}>
            <Link to={`division/${data._id}`}>
              <h2>{data.division}</h2>
            </Link>
            {
              <img
                src={`http://localhost:3001/uploads/${data.image}`}
                style={{ width: 250 }}
              />
            }
            <br />
            {data.body}
            {data.created}
          </div>
        );
      });
      return <>{dataDivision}</>;
    }
  }
}

const mapStateToProps = (state) => {
  console.log("ToursData Page>>", state);
  return { divisions: state.datasReducer.divisions };
};

export default connect(mapStateToProps, { fetchdatas })(ToursData);
