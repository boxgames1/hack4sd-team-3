import React, { Component } from "react";
import { mapa1, mapa2 } from "../mocks/mock1";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: props.center,
      zoom: props.zoom,
      options: {
        minZoom: 10
      },
      city: props.city
    };
  }

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            this.map = map;
            this.maps = maps;
            this.infowindow = new maps.InfoWindow();
          }}
          bootstrapURLKeys={{
            libraries: "places",
            key: "AIzaSyAErIUp2hb5EvzcLWyNp6B2iUWDOnJPL_A"
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          options={this.state.options}
        >
          <MapMarker
            lat={this.props.lat}
            lng={this.props.lng}
            class="default animated slideInDown animation-delay-200"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
