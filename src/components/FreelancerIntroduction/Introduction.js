import "./Introduction.css";
import reactImg from "../../assets/imgs/react.png";

import Typewriter from "typewriter-effect";

function FreelancerIntroduction() {
  return (
    <div>
      <div className="container">
        <div className="freelancer-introduction-wrapper">
          <div className="freelancer-img-wrapper">
            <img src={reactImg} alt="img" />
          </div>
          <h2 className="freelancer-name">من علی مرادی هستم</h2>
          <div className="freelancer-intro">
            <span className="color-orange">یک</span>
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("طراح")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("برنامه نویس")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("توسعه دهنده وب...")
                  .start();
              }}
            />
          </div>

          <div className="resume-link-wrapper">
            <a href="#">دانلود رزومه</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerIntroduction;
