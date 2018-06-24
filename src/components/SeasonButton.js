import React, { Component } from "react";

class SeasonButton extends Component {
  constructor(props) {
    super(props);
    let season, tag, title, subtitle;
    switch (props.option) {
      case 1:
        season = "Auttumn/Winter";
        tag = "Brown lovers";
        title = "Autumn";
        subtitle = "Live a season in autumn";
        break;
      case 2:
        season = "Spring/Summer";
        tag = "Brown lovers";
        title = "Autumn";
        subtitle = "Live a season in autumn";
        break;
    }
    this.state = {
      season,
      tag,
      title,
      subtitle,
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
        <p className="slider-tag">{this.state.tag}</p>
        <h2 className="slider-title">{this.state.title}</h2>
        <p className="slider-subtitle">{this.state.subtitle}</p>
      </div>
    );
  }
}

export default SeasonButton;
