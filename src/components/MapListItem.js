import React from "react";

const MapListItem = props => (
  <div className="MapListItem">
    <img src={props.item.img} />
    <p>
      #{props.index + 1} HEALTH ZONE {props.item.temperature}º
    </p>
    <h2>{props.item.city}</h2>
  </div>
);

export default MapListItem;
