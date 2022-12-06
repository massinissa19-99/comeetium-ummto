import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../components/userContext";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ban from "../../assets/img/ban.gif";
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  const { toggleModals } = useContext(UserContext);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FEEL", "THE", "MEET"];
  const period = 2000;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col size={12} md={6} xl={6}>
            <div className="header-left" data-aos="zoom-in">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to Comeetium</span>
                    <h1>
                      {`Hi! USERS`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="100"
                        data-rotate='[ "FEEL", "THE", "MEET" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>bonjour moi c'est lamia creatrice de Comeetium</p>
                    <button onClick={() => toggleModals("signUp")}>
                      Rejoindre <ArrowRightCircle size={35} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>

          <Col size={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="header-right" data-aos="zoom-in-up">
                    <img src={ban} />
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
