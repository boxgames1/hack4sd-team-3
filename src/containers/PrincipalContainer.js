// import { getCountries } from "../helpers/ApiConsumerMiNube";
import React from "react";
import PrincipalButton from "../components/PrincipalButton";
import "../css/components/init.css";

const InitContainer = () => (
  <div className="InitContainer row">
    <h1 className="principaltitle">BIRDIE</h1>
    <div className="PrinicpalButtonContainer col-md-12">
        <PrincipalButton />
    </div>
  </div>
);

export default InitContainer;
