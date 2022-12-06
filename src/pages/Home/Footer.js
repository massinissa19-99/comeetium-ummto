import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { NavLink } from "react-router-dom";
import { MdOutlineLibraryBooks } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <div data-aos="zoom-in">
            <MailchimpForm />
          </div>
          <Col xs={12} md={4} xl={4} className="mt-3 text-center  box ">
            <div className="footer-box">
              <h4>Contact Us</h4>
              <p>
                <FaMapMarkerAlt /> &nbsp; Address: Tizi-ouzou.
              </p>
              <p>
                <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
              </p>
              <p>
                <FaFax /> &nbsp; Fax: +12342762178
              </p>
              <p>
                <FaEnvelope /> &nbsp; Email: comeetium@fgei.ummto.dz
              </p>
              <p>
                <FaGlobe /> &nbsp; Website: www.comeetium.com
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4} className="box text-center ">
            <div className="footer-box">
              <h4>Useful Links</h4>
              <div className="footer-links">
                <a href="#">&bull; Support</a>
                <a href="#">&bull; About</a>
                <a href="#">&bull; Learn</a>
                <a href="#">&bull; Hosting</a>
                <a href="#">&bull; Messenger</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4} className="box text-center ">
            <div className="footer-box">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#">&bull; Support</a>
                <a href="#">&bull; About</a>
                <a href="#">&bull; Learn</a>
                <a href="#">&bull; Hosting</a>
                <a href="#">&bull; Messenger</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4} className="logo text-center ">
            <div className="logo-container">
              <img src="./img/logo.png" alt="Logo" />
              <h5 className="title-logo">comeetium</h5>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4} className="faq text-center ">
            <NavLink className="box faq" exact to="/FAQs">
              <MdOutlineLibraryBooks color="orangered" />
              <span className="faqs">FAQs</span>
            </NavLink>
          </Col>{" "}
          <Col xs={12} md={4} xl={4} className="text-center ">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright &copy; COMEETIUM 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
