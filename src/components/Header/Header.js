import "./Header.css";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div>
            <h1>
              <a href="#" className="site-logo-link">
                <span>Ali</span>
                DeWeb
              </a>
            </h1>
          </div>
          <div className="header-content-wrapper">
            <ul className="header-list-wrapper">
              <li>
                <a href="#" className="active-page">
                  خانه
                </a>
              </li>
              <li>
                <a href="#">درباره من</a>
              </li>
              <li>
                <a href="#">خدمات</a>
              </li>
              <li>
                <a href="#">نمونه کارها</a>
              </li>
              <li>
                <a href="#">نظرها</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">ارتباط با من</a>
              </li>
            </ul>
            <ul className="mobile-header-list-wrapper">
              <li>
                <a href="#" className="active-page">
                  خانه
                </a>
              </li>
              <li>
                <a href="#">درباره من</a>
              </li>
              <li>
                <a href="#">خدمات</a>
              </li>
              <li>
                <a href="#">نمونه کارها</a>
              </li>
              <li>
                <a href="#">نظرها</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">ارتباط با من</a>
              </li>
              <div className="mobile-header-list-social-icons-wrapper">
                <FaFacebook color="#fafafa"></FaFacebook>
                <FaTwitter color="#fafafa"></FaTwitter>
                <FaGithub color="#fafafa"></FaGithub>
                <FaLinkedin color="#fafafa"></FaLinkedin>
              </div>
            </ul>
            <div className="menu-icon-wrapper">
              <span onClick={hamburgerMenu} className="menu-icon"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function hamburgerMenu(event) {
  event.preventDefault();

  document
    .querySelector(`.mobile-header-list-wrapper`)
    .classList.toggle(`active`);
}

export default Header;
