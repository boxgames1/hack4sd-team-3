import React from "react";
import { Link } from "react-router-dom";

const MapListItem = props => (
  <div className="MapListItem">
    <Link to={`../results/${props.item.lat},${props.item.lng}`}>
      <img src={props.item.img} />
      <p>
        #{props.index + 1} HEALTH ZONE {props.item.temperature}º
      </p>
      <h2>{props.item.city}</h2>
    </Link>
  </div>
);

export default MapListItem;
