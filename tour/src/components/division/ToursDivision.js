import React from "react";
import { connect } from "react-redux";
import { fetchdata } from "../../actions";
import Details from "./Details";

class ToursDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("details page", id);
    this.props.fetchdata(id);
  }

  render() {
    if (!this.props.datas) {
      return <div>Loading...</div>;
    }

    const { division, body } = this.props.datas;
    const data = this.props.datas;
    //console.log("Details Page All Data", data);
    const famousPlaceDetails = data.famousPlaces;
    //console.log("Famous Places Detail", dd);

    return (
      <div>
        <h1>{division}</h1>
        <h5>{body}</h5>
        <Details famousPlaceDetails={famousPlaceDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return { datas: state.datas[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchdata })(ToursDivision);
