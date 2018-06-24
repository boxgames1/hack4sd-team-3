import React, { Component } from "react";
import "../css/components/MapMarker.css";
import "../css/libs/animate.css";

class MapMarker extends Component {
  render() {
    return (
      <div className="MapMarkerContainer">
        <div className={`MapMarker ${this.props.class}`} />
        {this.props.name && (
          <div className="MapMarkerInfo">{this.props.name}</div>
        )}
      </div>
    );
  }
}

export default MapMarker;
