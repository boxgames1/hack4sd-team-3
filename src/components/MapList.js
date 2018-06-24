import React, { Component } from "react";
import Slider from "react-slick";
import MapListItem from "./MapListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "20º",
          city: "Gijon"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "18º",
          city: "Oviedo"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "22º",
          city: "Aviles"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "17º",
          city: "Langreo"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "26º",
          city: "Llanes"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "12º",
          city: "Mieres"
        },
        {
          img:
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          temperature: "19º",
          city: "Cudillero"
        }
      ]
    };
    this.setItems = this.setItems.bind(this);
  }

  getItems() {
    //CalltoApi
  }
  setItems(items) {
    this.setState({ items });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true
    };
    return (
      <div className="MapList">
        {this.state.items.length > 0 && (
          <Slider {...settings}>
            {this.state.items.map((item, index) => (
              <MapListItem key={index} item={item} />
            ))}
          </Slider>
        )}
      </div>
    );
  }
}

export default MapList;
