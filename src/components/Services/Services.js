import "./Services.css";

import MainModal from "../Modals/MainModal";
import {
  FaPen,
  FaHeart,
  FaCheck,
  FaMobile,
  FaCircle,
  FaTable,
} from "react-icons/fa";

function Services() {
  return (
    <div className="services-sec-wrapper">
      <div className="container">
        <p className="services-section-des">ارائه خدمات</p>
        <h2 className="services-section-title">خدمات های من</h2>

        <div className="services-wrapper">
          <MainModal
            title="طراحی گرافیک"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaPen color="#ff645e"></FaPen>
          </MainModal>
          <MainModal
            title="پشتیبانی فنی"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaCheck color="#ff645e"></FaCheck>
          </MainModal>
          <MainModal
            title="تبلیغات"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaHeart color="#ff645e"> </FaHeart>
          </MainModal>
          <MainModal
            title="طراحی ریسپانسیو"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaMobile color="#ff645e"></FaMobile>
          </MainModal>
          <MainModal
            title="هرآنچه انتظار دارید"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaCircle color="#ff645e"></FaCircle>
          </MainModal>
          <MainModal
            title="پشتیبانی حرفه ای"
            des="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          >
            <FaTable color="#ff645e"></FaTable>
          </MainModal>
        </div>
      </div>
    </div>
  );
}

export default Services;
