import React, { Component } from "react";

import { getHotels } from "../helpers/ApiConsumerAmadeus";
import PropTypes from "prop-types";
import ResultItem from "./ResultItem";
import { oviedo } from "../mocks/mock1";
import { hotels } from "../mocks/mock1";
import { getPOI } from "../helpers/ApiConsumerMiNube";
import { ListGroup } from "react-bootstrap";
/*
 * We had to mock the data due to CORS issues with the APIs of Amadeus and MiNube
 * The functionallity is intact so we could integrate the app with the APIs without problem 
 * but not from localhost. We'd need a proxy or production environment to avoid those issues.
 */
class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude,
      type: props.type,
      items: []
    };
    this.setHotels = this.setHotels.bind(this);
  }

  componentWillMount() {
    //Amadeus
    if (this.state.type === "1") {
      this.setItems(hotels);
      //getHotels(this.state.latitude, this.state.longitude, this.setHotels);
    }

    // MiNube
    if (this.state.type === "2") {
      this.setItems(oviedo);
      // getPOI(this.state.latitude, this.state.longitude, 100000, this.setItems);
    }
    // TODO get data from API's and paint through callbacks
  }

  setItems(items) {
    console.log(items);
    this.setState({
      items
    });
  }

  setHotels(items) {
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
}

ResultsList.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ResultsList;
