import React from "react";

const MapListItem = props => (
  <div className="MapListItem">
    <img src={props.item.img} />
    <p>
      `#${props.key} HEALTH ZONE ${props.item.temperature}`
    </p>
    <h2>{props.item.city}</h2>
  </div>
);

export default MapListItem;
