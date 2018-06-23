import React, { Component } from "react";
// import { getCountries } from "../helpers/ApiConsumerMiNube";
import SeasonButton from "../components/SeasonButton";
import "../css/components/init.css";

class InitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }
  render() {
    return (
      <div className="InitContainer">
        <SeasonButton option="1" />
        <SeasonButton option="2" />
        <SeasonButton option="3" />
        <SeasonButton option="4" />
      </div>
    );
  }
}

export default InitContainer;
