import "./BlogsModal.css";

import React, { Component } from "react";
import { FaCalendar, FaComment } from "react-icons/fa";

export default class BlogsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-modal-wrapper">
        <div className="blog-img-wrapper">
          <img src={this.props.img} alt="img" />
        </div>

        <div className="blog-infos-wrapper">
          <div className="blog-date-wrapper">
            <FaCalendar color="#ff645e"></FaCalendar>
            {this.props.date}
          </div>
          <div className="blog-comments-num-wrapper">
            <FaComment color="#ff645e"></FaComment>
            {this.props.commentsNum}
          </div>
        </div>

        <h3 className="blog-title">{this.props.title}</h3>
        <p className="blog-des">{this.props.dec}</p>

        <div className="blog-btn-wrapper">
          <a href={this.props.link}>ادامه مطلب...</a>
        </div>
      </div>
    );
  }
}
