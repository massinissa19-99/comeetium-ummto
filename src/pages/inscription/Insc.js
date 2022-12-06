import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inscriptions from "./Inscriptions";
import signup from "../../assets/img/signup.gif";
import "./Insc.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavIns } from "../../components/navbar insc-con/NavIns";
import AOS from "aos";
import "aos/dist/aos.css";
function Insc() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="nav">
        <NavIns />
      </div>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row className="insc">
          <Col xs={12} md={6} lg={6} className="mt-5">
            <div className="header-left" data-aos="zoom-in">
              <img src={signup} alt="" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="header-left" data-aos="zoom-in">
              <h1>Inscription</h1>
              <div className="retour">
                <p className="">vous avez deja un compte ?</p>
                <NavLink className="nav-insc" exact to="/connexion">
                  <span className="home">connexion</span>
                </NavLink>
              </div>
              <Inscriptions />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Insc;
