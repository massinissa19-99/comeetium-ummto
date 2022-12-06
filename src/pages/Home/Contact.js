import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";
export const Contact = () => {
  const formInitialDetails = {
    email: "",
    password: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Connexion");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("connecting ...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: "Something went wrong, please try again later.",
    //   });
    // }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="img-left" data-aos="flip-right">
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Connexion"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  id="formulaire"
                >
                  <div className="img-right" data-aos="flip-left">
                    <h2>Connexion</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="px-1">
                          <input
                            type="password"
                            value={formDetails.password}
                            placeholder="Password"
                            onChange={(e) =>
                              onFormUpdate("password", e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Row>
                    </form>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
