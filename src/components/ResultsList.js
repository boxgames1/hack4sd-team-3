import React, { Component } from "react";
import { getHotels } from '../helpers/ApiConsumerAmadeus';


class ResultsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotels: [],
      latitude: 52.5238,//props.latitude,
      longitude: 13.3835//props.longitude
    };
    this.setHotels = this.setHotels.bind(this);
  }
  setHotels(hotels){
    this.setState({
      hotels
    });
  };
  componentWillMount(){
    getHotels(this.state.latitude, this.state.longitude, this.setHotels);
  }

  render() {
    if(this.state.hotels.length > 0) console.log(this.state.hotels);
    return (
      <div id = "ResultsList">
        {this.state.hotels && this.state.hotels.length > 0 && this.state.hotels.map( hotel => (
          <div className="Hotel">
            {hotel.hotel.name}
            <ul className = "list-group">
              {hotel.offers && hotel.offers.length > 0 && hotel.offers.map( offer => (
                <ul>
                  <li className="list-group-item">{offer.room.description.text}</li> 
                  <li className="list-group-item">{offer.guests.adults} adults: {offer.price.total} {offer.price.currency} </li>         
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
export default ResultsList;
