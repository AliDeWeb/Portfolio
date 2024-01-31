import "./Map.css";

import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-com-wrapper">
        <iframe src={this.props.locationLink}></iframe>
      </div>
    );
  }
}
