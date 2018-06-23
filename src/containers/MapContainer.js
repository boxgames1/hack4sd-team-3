import React, { Component } from "react";
import Map from "../components/Map";
import "../css/components/map.css";
import { getHemisphereFromDateSeason } from "../helpers/Utils";
class MapContainer extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const hemisphere = getHemisphereFromDateSeason(
      today,
      parseInt(props.session)
    );
    this.state = {
      season: props.season,
      hemisphere
    };
  }

  render() {
    return (
      <div className="MapContainer">
        {this.state.season} y {this.state.hemisphere}
        <Map />
      </div>
    );
  }
}

export default MapContainer;
