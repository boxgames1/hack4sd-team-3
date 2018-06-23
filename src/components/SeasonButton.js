import React, { Component } from "react";

class SeasonButton extends Component {
  constructor(props) {
    super(props);
    let season;
    switch (props.option) {
      case 1:
        season = "Winter";
        break;
      case 2:
        season = "Spring";
        break;
      case 3:
        season = "Summer";
        break;
      case 4:
        season = "Auttumn";
        break;
    }
    this.state = {
      season,
      option: props.option
    };
    this.clickSeason = this.clickSeason.bind(this);
  }

  clickSeason = () => {
    window.location = "/map/" + this.state.option;
  };

  render() {
    return (
      <div className="SeasonButton">
        <button onClick={this.clickSeason}>{this.state.season}</button>
      </div>
    );
  }
}

export default SeasonButton;
