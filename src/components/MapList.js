import React, { Component } from "react";
import Slider from "react-slick";
import MapListItem from "./MapListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeFirst: props.changeFirst,
      items: props.items,
      baseItems: props.items,
      search: ""
    };
    this.setItems = this.setItems.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  getItems() {
    //CalltoApi
  }
  setItems(items) {
    this.setState({ items });
  }

  filterList(e) {
    const items = this.state.baseItems.filter(el => {
      let searchValue = el.city.toLowerCase();
      return searchValue.indexOf(e.target.value) !== -1;
    });
    this.state.changeFirst(items[0]);
    this.setState({
      search: e.target.value,
      items
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: this.state.items.length > 3,
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
              <MapListItem key={index} index={index} item={item} />
            ))}
          </Slider>
        )}
        {this.state.items.length === 0 && (
          <h1>We haven’t found what you’re looking for</h1>
        )}
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search"
          value={this.state.search}
          onChange={this.filterList}
        />
      </div>
    );
  }
}

export default MapList;
