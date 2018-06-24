import React, { Component } from "react";
import PropTypes from "prop-types";
import MapContainer from "../containers/MapContainer";

class MapScreen extends Component {
  render() {
    let season = "";
    if (
      this.props.match.params !== undefined &&
      this.props.match.params.season !== undefined
    ) {
      season = this.props.match.params.season;
    } else {
      window.location = "/";
    }
    return (
      <div>
        <MapContainer type={season} />
      </div>
    );
  }
}

MapScreen.propTypes = {
  match: PropTypes.object
};

MapScreen.defaultProps = {
  match: undefined
};

export default MapScreen;
