import React, { Component } from "react";
import ResultsList from "../components/ResultsList";
import "../css/components/results.css";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ResultsContainer">
        <ResultsList />
      </div>
    );
  }
}

export default ResultsContainer;
