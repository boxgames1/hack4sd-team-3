import React, { Component } from "react";
import Map from "../components/Map";
import MapList from "../components/MapList";
import "../css/components/map.css";
import { getCiudadesByType } from "../mocks/mock1";

/*
* This is the place where we make the sort of places based on 3 air quality parameters 
* that we got from Resource Watch API. As same as in the other 2 (Amadeus and MiNube) we had to 
* deal with CORS issues. Due to limited time we couldn't give effort in fix that problem.
* The App works with this data and only would need to connect from a correct server.
*/

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
    this.setState({
      form: center,
      city: item.name
    });
  }

  goToHome() {
    window.location = "/";
  }

  render() {
    return (
      <div className="MapContainer">
        <button
          className="btn btn-default returnButton"
          onClick={this.goToHome}
        >
          Return
        </button>
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
