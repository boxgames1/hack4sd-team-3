import React, { Component } from "react";
import ResultsContainer from "../containers/ResultsContainer";
import PropTypes from "prop-types";

class ResultsScreen extends Component {
  render() {
    let latitude, longitude;
    if (
      this.props.match.params !== undefined &&
      this.props.match.params.coordinates !== undefined &&
      this.props.match.params.coordinates.split(",").length > 0
    ) {
      latitude = this.props.match.params.coordinates.split(",")[0];
      longitude = this.props.match.params.coordinates.split(",")[1];
    } else {
      window.location = "/";
    }
    return (
      <div>
        <ResultsContainer latitude={latitude} longitude={longitude} />
      </div>
    );
  }
}

ResultsScreen.propTypes = {
  match: PropTypes.object
};

ResultsScreen.defaultProps = {
  match: undefined
};

export default ResultsScreen;
