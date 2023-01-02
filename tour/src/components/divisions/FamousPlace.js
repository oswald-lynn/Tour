import React from "react";
import { connect } from "react-redux";
import { fetchFamousPlace } from "../../actions";

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
      const hotels = famousPlace.hotels;
      return (
        <div>
          <h2>Famous Page Detail</h2>
          {
          hotels.map((hotel)=>
          <div>
            <div>
              {hotel.name}
            </div>
          </div>)
          }
          {/* {hotelDetails} */}
          {/* {JSON.stringify(famousPlace)} */}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log("Famoust Page Data", state);

  return {
    singleDivision: state.divisionReducer.singleDivision,
    famousPlace: state.divisionReducer.famousPlace,
  };
};

export default connect(mapStateToProps, { fetchFamousPlace })(FamousPlace);
