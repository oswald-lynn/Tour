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
      //   const places = famousPlace;
      //   console.log("Famous Details", places);
      const hotels = famousPlace?.hotels?.map((place) => {
        return (
          <div key={place._id}>
            <h4>Name</h4>
            {place.name}
            <h4>Address</h4>
            {place.address}
            <h4>Phone</h4>
            {place.phone}
          </div>
        );
      });

      // const hotelDetails = hotels.map((hotel) => {
      //   <>
      //     <div key={hotel._id}>
      //       <strong>{hotel.name}</strong>
      //     </div>
      //     <div>{hotel.address}</div>
      //   </>;
      // });
      return (
        <div>
          <h2>Famous Page Detail</h2>
          <h3>{famousPlace.name}</h3>
          <div>
            <h3>About</h3>
            {famousPlace.about}
          </div>
          <div>
            <h3>Transportation</h3>
            {famousPlace.transportation}
          </div>
          <div>
            <h3> Hotels </h3>
            {hotels}
          </div>

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
