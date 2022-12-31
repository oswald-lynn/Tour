import React from "react";
import { connect } from "react-redux";
//import { fetchdatasAndfmousplace } from "../../actions";
import { fetchdata } from "../../actions";

class ToursDivision extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log("details page", id);
    //this.props.fetchdatasAndfmousplace(_id);
    this.props.fetchdata(id);
  }

  render() {
    const { data } = this.props;
    //const datas = this.props.data;
    //console.log("Render", this.props.datas);
    console.log("Rendering Data Division Page>>", data);
    if (!this.props.data) {
      return <div>Loading...</div>;
    } else {
      return <>Famous Places Page !!</>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { datas: state.datas[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchdata })(ToursDivision);
