import React, { Component } from "react";
import Map from "../components/Map";
import "../css/components/map.css";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MapContainer">
        <Map />
      </div>
    );
  }
}

export default MapContainer;
