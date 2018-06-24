import ReactSwipe from "react-swipe";
import React, { Component } from "react";

class SeasonButton extends Component {
  constructor(props) {
    super(props);
    let season, tag, title;
    switch (props.option) {
      case 1:
        season = "warm";
        tag = "or swipe right >>";
        title = "Warm";
        break;
      case 2:
        season = "cold";
        tag = "<< or swipe left";
        title = "Cold";
        break;
    }
    this.swipe = props.swipe;
    this.state = {
      season,
      tag,
      title,
      option: props.option
    };
    this.clickSeason = this.clickSeason.bind(this);
  }

  clickSeason = () => {
    window.location = "/map/" + this.state.option;
  };

  render() {
    return (
      <div className={"SeasonButton col-xs-12 " + this.state.season}>
        <h2 className="slider-title">{this.state.title}</h2>
        <button onClick={this.clickSeason}>CONFIRM</button>
        <p className="slider-tag">{this.state.tag}</p>
      </div>
    );
  }
}

export default SeasonButton;
