import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
import { getCategoryByID } from "../mocks/mock1";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    let item = <div />;
    if (props.type === "2") {
      item = (
        <ListGroupItem href="#link1">
          <div className="POI col-md-12">
            <div className="col-md-4">{props.item.name}</div>
            <div className="col-md-2">
              {getCategoryByID(props.item.subcategory_id)}
            </div>
            <div className="col-md-12">
              <img src={props.item.picture_url} />
            </div>
          </div>
        </ListGroupItem>
      );
    }
    this.state = {
      item
    };
  }

  render() {
    return <div className="ResultItem">{this.state.item}</div>;
  }
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default ResultItem;
