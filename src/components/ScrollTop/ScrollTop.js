import "./ScrollTop.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  return (
    <div onClick={scrollTopFunc} className="scroll-top-icon-wrapper">
      <FaArrowUp color="#fafafa"></FaArrowUp>
    </div>
  );
}

function scrollTopFunc(event) {
  event.preventDefault();

  window.scrollTo(0, 0);
}

export default ScrollTop;
