import "./Blog.css";

import React, { Component } from "react";
import BlogsModal from "../Modals/BlogsModal";

import blogImg1 from "../../assets/imgs/blogs-img/01.jpg"
import blogImg2 from "../../assets/imgs/blogs-img/02.jpg"
import blogImg3 from "../../assets/imgs/blogs-img/03.jpg"

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [
        {
          img: blogImg1,
          title: " بهترین خودت باش",
          dec: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
          link: "#",
          date: "21 مهر 1401 ",
          commentsNum: 3,
        },
        {
          img: blogImg2,
          title: " 5 نکته در طراحی UI/UX",
          dec: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
          link: "#",
          date: "13 آذر 1401 ",
          commentsNum: 5,
        },
        {
          img: blogImg3,
          title: " رویاهات رو بنویس",
          dec: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
          link: "#",
          date: "23 خرداد 1401 ",
          commentsNum: 8,
        },
      ],
    };
  }

  render() {
    return (
      <div className="blog-sec-wrapper">
        <div className="container">
          <p className="blog-section-des">آخرین بلاگ ها</p>
          <h2 className="blog-section-title">نوشته های اخیر من</h2>

          <div className="blog-sec-blog-modals-wrapper">
            <BlogsModal {...this.state.blogs[0]}></BlogsModal>
            <BlogsModal {...this.state.blogs[1]}></BlogsModal>
            <BlogsModal {...this.state.blogs[2]}></BlogsModal>
          </div>

          <div className="blog-sec-more-btn-wrapper">
            <a href="#" className="blog-sec-more-btn">
              مشاهده بیشتر
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
