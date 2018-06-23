import React, { Component } from "react";
import Map from "../components/Map";
import "../css/components/map.css";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    let hemisphere = 1; // 0 - none, 1 - north, 2 - south
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    let currentSeason = 1;
    switch (currentMonth) {
      case 1:
      case 2:
        currentSeason = 1;
        break;
      case 3:
        if (currentDay < 21) currentSeason = 1;
        else currentSeason = 2;
        break;
      case 4:
      case 5:
        currentSeason = 2;
        break;
      case 6:
        if (currentDay < 21) currentSeason = 2;
        else currentSeason = 3;
        break;
      case 7:
      case 8:
        currentSeason = 3;
        break;
      case 9:
        if (currentDay < 21) currentSeason = 3;
        else currentSeason = 4;
        break;
      case 10:
      case 11:
        currentSeason = 4;
        break;
      case 12:
        if (currentDay < 21) currentSeason = 4;
        else currentSeason = 1;
        break;
    }
    if (currentSeason === props.season) hemisphere = 1;
    else if (props.season === 4 - currentSeason + 1) hemisphere = 2;
    else hemisphere = 0;
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
