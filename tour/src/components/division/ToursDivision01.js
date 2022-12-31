import React from "react";
import { connect } from "react-redux";
import { fetchdata } from "../../actions";
import { Link } from "react-router-dom";
import Details from "./Details";
//import FamousPlacesDetails from "./FamousPlacesDetails";
//import Details from "./Details";

class ToursDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("details page", id);
    this.props.fetchdata(id);
  }

  render() {
    const datas = this.props.dataDivision;
    console.log(datas);
    if (this.props.datas) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.datas);
      return <>Hello</>;
    }

    const { division, body } = this.props.datas;
    const data = this.props.datas;
    //console.log("Details Page All Data", data);
    const famousPlaceDetails = data.famousPlaces;
    //console.log("LastTest>>", famousPlaceDetails);
    // const dd = famousPlaceDetails.map((d) => {
    //   return (
    //     <div key={d.id}>
    //       <Link to={`/famousPlaces/${d.id}`}>{d.name}</Link>
    //     </div>
    //   );
    // });

    return (
      <div>
        <h1>{division}</h1>
        <h5>{body}</h5>
        <Details placeDetails={famousPlaceDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return { datas: state.datas[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchdata })(ToursDivision);
