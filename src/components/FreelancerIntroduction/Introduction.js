import "./Introduction.css";
import reactImg from "../../assets/imgs/react.png";

function FreelancerIntroduction() {
  return (
    <div>
      <div className="container">
        <div className="freelancer-introduction-wrapper">
          <div className="freelancer-img-wrapper">
            <img src={reactImg} alt="img" />
          </div>
          <h2 className="freelancer-name">من علی مرادی هستم</h2>
          <p className="freelancer-intro">
            {" "}
            <span>یک</span> توسعه دهنده وب{" "}
          </p>

          <div className="resume-link-wrapper">
            <a href="#">دانلود رزومه</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerIntroduction;
