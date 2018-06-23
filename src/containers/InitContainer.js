// import { getCountries } from "../helpers/ApiConsumerMiNube";
import React from "react";
import SeasonButton from "../components/SeasonButton";
import "../css/components/init.css";

const InitContainer = () => (
  <div className="InitContainer row">
    <h1 className="title"> Title </h1>
    <div className="SeasonButtonsContainer col-md-12">
      <SeasonButton option={1} />
      <SeasonButton option={2} />
      <SeasonButton option={3} />
      <SeasonButton option={4} />
    </div>
  </div>
);

export default InitContainer;
