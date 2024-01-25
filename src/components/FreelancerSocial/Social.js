import "./Social.css";

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div className="social-container">
      <div className="social-parent">
        <div className="social-wrapper">
          <a href="#" title="Facebook">
            <FaFacebook color="#fafafa" size="16px" />
          </a>
        </div>
        <div className="social-wrapper">
          <a href="#" title="Twitter">
            <FaTwitter color="#fafafa" size="16px" />
          </a>
        </div>
        <div className="social-wrapper">
          <a href="#" title="Github">
            <FaGithub color="#fafafa" size="16px" />
          </a>
        </div>
        <div className="social-wrapper">
          <a href="#" title="LinkedIn">
            <FaLinkedin color="#fafafa" size="16px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
