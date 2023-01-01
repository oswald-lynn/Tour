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
    console.log("famousPageError>>", famousPlace);

    if (!famousPlace) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Famous Page Detail</h2>
        {JSON.stringify(famousPlace)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Famoust Page Data", state);
  return { famousPlace: state.datasReducer.famousPlace };
};

export default connect(mapStateToProps, { fetchFamousPlace })(FamousPlace);
