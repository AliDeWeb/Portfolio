import "./Header.css";

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
          <div>
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
            <span className="menu-icon"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
