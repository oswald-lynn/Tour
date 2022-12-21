import React from "react";
import { connect } from "react-redux";
import { fetchdetail } from "../../actions";

class FamousPlacesDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("Famous Place page", id);
    this.props.fetchdetail(id);
  }

  render() {
    const data = this.props.famousPlaces;
    //const famousPlaceDetails = data.famousPlaces;
    console.log("famousPageError>>", data);
    if (!this.props.datas) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Famous Page Detail</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Famoust Page Data", state);
  return { datas: state.datas[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchdetail })(FamousPlacesDetails);
