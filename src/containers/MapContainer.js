import React, { Component } from "react";
import Map from "../components/Map";
import MapList from "../components/MapList";
import "../css/components/map.css";
import { getHemisphereFromDateSeason } from "../helpers/Utils";
class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type, // 1 - calor, 2- frio
      lat: "43.363396",
      lng: "-5.864862",
      city: "Oviedo"
    };
  }

  render() {
    return (
      <div className="MapContainer">
        <Map lat={this.state.lat} lng={this.state.lng} city={this.state.city} />
        <MapList type={this.state.type} />
      </div>
    );
  }
}

export default MapContainer;
