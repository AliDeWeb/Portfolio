import "./Social.css";

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div className="social-container">
      <div className="container">
        <div className="social-parent">
          <div className="social-wrapper">
            <a href="#">
              <FaFacebook color="#fafafa" size="16px" />
            </a>
          </div>
          <div className="social-wrapper">
            <a href="#">
              <FaTwitter color="#fafafa" size="16px" />
            </a>
          </div>
          <div className="social-wrapper">
            <a href="#">
              <FaGithub color="#fafafa" size="16px" />
            </a>
          </div>
          <div className="social-wrapper">
            <a href="#">
              <FaLinkedin color="#fafafa" size="16px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
