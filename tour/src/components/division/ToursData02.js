import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchdatas } from "../../actions";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

class ToursData extends React.Component {
  componentDidMount() {
    this.props.fetchdatas();
  }
  render() {
    console.log("Rendering Data>>", this.props.datas);
    return (
      <>
        <h2> Tours Data !!</h2>
        <div className="site-card-border-less-wrapper">
          <Row gutter={16}>
            {this.props.datas.map((data) => (
              <Col span={6} key={data.id}>
                <Card
                  hoverable
                  cover={<img src="images/img01.jpg" alt="tourdestination" />}
                >
                  <Link to={`/${data.id}`}>
                    <Meta title={data.division} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("ToursData Page>>", state);
  return { datas: Object.values(state.datas) };
};

export default connect(mapStateToProps, { fetchdatas })(ToursData);
