// import { getCountries } from "../helpers/ApiConsumerMiNube";
import React from "react";
import Carousel from "nuka-carousel";
import SeasonButton from "../components/SeasonButton";
import "../css/components/init.css";

const InitContainer = () => (
  <div className="InitContainer row">
    <h1 className="title"> Choose your season </h1>
    <div className="SeasonButtonsContainer col-md-12">
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <span className="text-btn-carousel">
            <button
              className="btn btn-default btn-circle"
              onClick={previousSlide}
            >
              <span className="glyphicon glyphicon-chevron-left" />
            </button>
            mejor frío
          </span>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <span className="text-btn-carousel">
            mejor calor
            <button className="btn btn-default btn-circle" onClick={nextSlide}>
              <span className="glyphicon glyphicon-chevron-right" />
            </button>
          </span>
        )}
      >
        <SeasonButton option={1} />
        <SeasonButton option={2} />
      </Carousel>
    </div>
  </div>
);

export default InitContainer;
