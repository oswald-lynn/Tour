import React from "react";
import { connect } from "react-redux";
//import { fetchdatasAndfmousplace } from "../../actions";
import { fetchdata } from "../../actions";
import { Link } from "react-router-dom";

class ToursDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("details page", id);
    //this.props.fetchdatasAndfmousplace(_id);
    this.props.fetchdata(id);
  }

  render() {
    const { singleDivision } = this.props;
    //const datas = this.props.data;
    //console.log("Render", this.props.datas);
    console.log("Rendering Data Division Page>>", singleDivision);
    if (!singleDivision) {
      return <div>Loading...</div>;
    } else {
      const famousPlaces = singleDivision?.famousplace?.map((famousplace) => (
        <div key={famousplace._id}>
          <Link to={`/famousplaces/${famousplace._id}`}>
            {famousplace.name}
          </Link>
          <p>{famousplace.name}</p>
          <p>{famousplace.about}</p>
        </div>
      ));
      // return <>{JSON.stringify(singleDivision)}
      return (
        <>
          <p>{singleDivision.division}</p>
          <h2>Famous Places</h2>
          {famousPlaces}
        </>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    //divisions: state.datasReducer.divsions,
    singleDivision: state.datasReducer.singleDivision,
  };
};

export default connect(mapStateToProps, { fetchdata })(ToursDivision);
