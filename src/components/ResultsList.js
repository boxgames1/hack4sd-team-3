import React, { Component } from "react";

import { getHotels } from '../helpers/ApiConsumerAmadeus';
import PropTypes from "prop-types";
import ResultItem from "./ResultItem";
import { oviedo } from "../mocks/mock1";
import { getPOI } from "../helpers/ApiConsumerMiNube";
import { ListGroup } from "react-bootstrap";

class ResultsList extends Component {
  constructor(props){
    super(props);
      latitude: props.latitude,
      longitude: props.longitude,
      type: props.type,
      items: [],
      hotels: [],
    };
    this.setHotels = this.setHotels.bind(this);
  }
  
  setHotels(hotels){
    this.setState({
      hotels
    });
  };

  componentWillMount() {
    getHotels(this.state.latitude, this.state.longitude, this.setHotels);
    // MiNube
    // getPOI(this.state.latitude, this.state.longitude, 100000, this.setItems);
    if (this.state.type === "2") {
      this.setItems(oviedo);
    }
    // TODO get data from API's and paint through callbacks
  }

  setItems(items) {
    console.log(items);
    this.setState({
      items
    });
  }
  render() {
    return (
      <div className="ResultsList">
        <ListGroup>
          {this.state.items &&
            this.state.items.length > 0 &&
            this.state.items.map(item => (
              <ResultItem item={item} key={item.id} type={this.state.type} />
            ))}
        </ListGroup>
      </div>
    );
}

ResultsList.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ResultsList;
