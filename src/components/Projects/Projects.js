import "./Projects.css";
import img1 from "../../assets/imgs/projects-img/01.jpg";
import img2 from "../../assets/imgs/projects-img/02.jpg";
import img3 from "../../assets/imgs/projects-img/03.jpg";
import img4 from "../../assets/imgs/projects-img/04.jpg";
import img5 from "../../assets/imgs/projects-img/05.jpg";
import img6 from "../../assets/imgs/projects-img/06.jpg";

function Projects() {
  return (
    <div className="projects-sec-wrapper">
      <div className="container">
        <p className="projects-section-des">آخرین پروژه ها</p>
        <h2 className="projects-section-title">کارهای من</h2>
        <ul className="projects-section-categories-list-wrapper">
          <li>
            <span className="active">همه</span>
          </li>
          <li>
            <span>طراحی سایت</span>
          </li>
          <li>
            <span>طراحی لوگو</span>
          </li>
          <li>
            <span>سئو</span>
          </li>
          <li>
            <span>گرافیک</span>
          </li>
        </ul>
        <div className="projects-section-projects-list-wrapper">
          <div>
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
          <div>
            <img src={img5} alt="img" />
          </div>
          <div>
            <img src={img6} alt="img" />
          </div>
        </div>
        <div className="projects-section-btns-wrapper">
          <a href="#">مشاهده بیشتر</a>
          <a href="#">صفحه نمونه کارها</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
