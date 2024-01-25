import "./AboutFreelancer.css";

import freelancerImg from "../../assets/imgs/freelancer-img.jpg";

function AboutFreelancer() {
  return (
    <div>
      <div className="container">
        <div className="about-freelancer-wrapper">
          <div className="freelancer-full-img-wrapper">
            <img src={freelancerImg} alt="img" />
          </div>
          <div className="about-freelancer-infos-wrapper">
            <h2>درباره من</h2>
            <p>
              <span>UI/UX</span> طراحی و توسعه وب
            </p>
            <div className="freelancer-infos">
              <div>
                <div className="freelancer-infos-items">
                  تاریخ تولد:
                  <span> خرداد 1373</span>
                </div>
                <div className="freelancer-infos-items">
                  وب سایت :<span> www.sample.com</span>
                </div>
                <div className="freelancer-infos-items">
                  شهر:
                  <span> تبریز</span>
                </div>
                <div className="freelancer-infos-items">
                  تلفن:
                  <span> 09171234567</span>
                </div>
              </div>
              <div>
                <div className="freelancer-infos-items">
                  تاریخ تولد:
                  <span> خرداد 1373</span>
                </div>
                <div className="freelancer-infos-items">
                  وب سایت :<span> www.sample.com</span>
                </div>
                <div className="freelancer-infos-items">
                  شهر:
                  <span> تبریز</span>
                </div>
                <div className="freelancer-infos-items">
                  تلفن:
                  <span> 09171234567</span>
                </div>
              </div>
            </div>
            <div className="btns">
              <a href="#">دانلود رزومه</a>
              <a href="#">استخدام من</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFreelancer;
