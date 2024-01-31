import "./Footer.css";

import Map from "../Map/Map";

import { FaPhone, FaLocationArrow, FaPaperPlane } from "react-icons/fa";

import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="footer-sec-wrapper">
          <div className="container">
            <p className="footer-section-des">با من در تماس باشید</p>
            <h2 className="footer-section-title">ارتباط با من</h2>

            <Map locationLink="https://nshn.ir/_b1BDgPB0cWD" />

            <div className="footer-contact-way">
              <div>
                <div>
                  <FaPhone color="#ff645e" />
                  تلفن تماس
                </div>
                <span>09171234567</span>
              </div>
              <div>
                <div>
                  <FaLocationArrow color="#ff645e" />
                  آدرس دفتر
                </div>
                <span>فارس ، شیراز ، قصرالدشت</span>
              </div>
              <div>
                <div>
                  <FaPaperPlane color="#ff645e" />
                  ایمیل من
                </div>
                <span>info@example.com</span>
              </div>
            </div>

            <p className="footer-pa">
              حق نشر محفوظ است. طراحی قالب توسط{" "}
              <a href="https://github.com/AliDeWeb">AliDeWeb</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
