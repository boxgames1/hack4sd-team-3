import React, { Component } from "react";
import { LayerManagerLeaflet } from "layer-manager";
import groupBy from "lodash/groupBy";
import wriAPISerializer from "wri-json-api-serializer";
import { mapa1, mapa2 } from "../mocks/mock1";
import { Legend, LegendItemToolbar, LegendItemTypes } from "wri-api-components";

import "../../node_modules/wri-api-components/dist/components.css";

const L = window.L;

class Map extends Component {
  constructor() {
    super();
    this.state = {
      legendSpec: [],
      apiUrl: ""
    };
  }
  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    window.map = L.map("c-map", {
      zoomControl: false
    }).setView([27, 12], 3);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(window.map);
    /*L.tileLayer(mapa2, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(window.map);*/
    L.control
      .zoom({
        position: "topright"
      })
      .addTo(window.map);
  };

  render() {
    const { legendSpec } = this.state;
    return (
      <div className="Map">
        <div id="c-map" />
        <div className="legend">
          {legendSpec.length > 0 && (
            <Legend
              maxHeight={300}
              layerGroups={legendSpec}
              // List item
              LegendItemToolbar={<LegendItemToolbar />}
              LegendItemTypes={<LegendItemTypes />}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Map;
