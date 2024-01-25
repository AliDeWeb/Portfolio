import "./Skills.css";

import ProgressBar from "../ProgressBar/ProgressBar";

function Skills() {
  return (
    <div className="skills-sec-wrapper">
      <div className="container">
        <p className="skills-section-des">سطح مهارت</p>
        <h2 className="skills-section-title">مهارت های من</h2>
        <div className="skills-progress-bar-wrapper">
          <div>
            <ProgressBar title="HTML" value="90" />
            <ProgressBar title="CSS" value="95" />
            <ProgressBar title="JS" value="80" />
          </div>
          <div>
            <ProgressBar title="React" value="40" />
            <ProgressBar title="NodeJs" value="20" />
            <ProgressBar title="PHP" value="10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
