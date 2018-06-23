import React, { Component } from "react";
import ResultsList from "../components/ResultsList";
import "../css/components/results.css";
import { Tabs, Tab } from "react-bootstrap";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude
    };
  }

  render() {
    // lists types 1 - hotels(amadeus), 2 - POI(minube)
    return (
      <div className="ResultsContainer">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab title="Hotels" eventKey={1}>
            <ResultsList
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              type="1"
            />
          </Tab>
          <Tab title="Points of interest" eventKey={2}>
            <ResultsList
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              type="2"
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default ResultsContainer;
