import React from "react";
import { connect } from "react-redux";
import { fetchdata } from "../actions";

class ToursData extends React.Component {
  componentDidMount() {
    this.props.fetchdata();
  }
  renderList() {
    return this.props.datas.map((data) => {
      return (
        <div key={data.id}>
          {data.body}
          {data.division}
        </div>
      );
    });
  }

  render() {
    //console.log("Rendering Data", this.props.datas);
    return (
      <>
        <h2> Tours Data !!</h2>
        {this.renderList()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log("ToursData Page", state);
  return { datas: Object.values(state.datas) };
};

export default connect(mapStateToProps, { fetchdata })(ToursData);
