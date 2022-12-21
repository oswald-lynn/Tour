import React from "react";
import { connect } from "react-redux";
import { fetchdata } from "../../actions";

class ToursDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("details page", id);
    this.props.fetchdata(id);
  }

  render() {
    //console.log(state);
    if (!this.props.datas) {
      return <div>Loading...</div>;
    }

    const { division, body } = this.props.datas;
    //const { datas } = this.props.datas;
    //console.log("Details Page All Data", datas);
    //const dd = famousPlaces[0].name;
    //const ee = famousPlaces[1].hotels;
    //console.log(ee);
    // const data = this.props.datas;
    // console.log("Detail Page All Data", data);
    // {
    //   Object.keys(data.famousPlaces).map((famousplace, index) => (
    //     <li key={index}>
    //       {data.famousPlaces[famousplace].name} -{" "}
    //       {data.famousPlaces[famousplace].about}
    //     </li>
    //   ));
    // }
    return (
      <div>
        <h1>{division}</h1>
        <h5>{body}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return { datas: state.datas[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchdata })(ToursDivision);
