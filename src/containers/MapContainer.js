import React, { Component } from "react";
import Map from "../components/Map";
import MapList from "../components/MapList";
import "../css/components/map.css";
import { getHemisphereFromDateSeason } from "../helpers/Utils";
import { getCiudadesByType } from "../mocks/mock1";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    const items = getCiudadesByType(props.type).sort((a, b) => {
      if (a.pm25 + a.co2 + a.o2 > b.pm25 + b.co2 + b.o2) {
        return 1;
      }
      return -1;
    });
    this.state = {
      type: props.type, // 1 - calor, 2- frio
      center: {
        lat: items[0].lat,
        lng: items[0].lng
      },
      form: {
        lat: items[0].lat,
        lng: items[0].lng
      },
      zoom: 16,
      city: items[0].name,
      items
    };
    this.changeFirst = this.changeFirst.bind(this);
  }

  changeFirst(item) {
    let center = {
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lng)
    };
    console.log(center, this.state.center);
    this.setState({
      form: center,
      city: item.name
    });
  }

  render() {
    return (
      <div className="MapContainer">
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          city={this.state.city}
        />
        <MapList
          type={this.state.type}
          items={this.state.items}
          changeFirst={this.changeFirst}
        />
      </div>
    );
  }
}

export default MapContainer;
