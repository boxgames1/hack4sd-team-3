// import { getCountries } from "../helpers/ApiConsumerMiNube";
import React from "react";
import ReactSwipe from "react-swipe";
import SeasonButton from "../components/SeasonButton";
import "../css/components/init.css";

const InitContainer = () => (
  <div className="InitContainer row">
    <div className="SeasonButtonsContainer col-md-12">
      <ReactSwipe
        ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        className="carousel"
        swipeOptions={{ continuous: false }}
      >
        <SeasonButton option={1} swipe={this.reactSwipe} />
        <SeasonButton option={2} />
      </ReactSwipe>
    </div>
  </div>
);

export default InitContainer;
