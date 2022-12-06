import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from "react-bootstrap/Carousel";
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import slide1 from "../../assets/img/slide1.gif";
import login from "../../assets/img/login.gif";
import slide2 from "../../assets/slide/slide2.svg";
import { CameraVideo } from "react-bootstrap-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container" data-aos="fade-up">
        <div className="title" data-aos="fade-down">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>

                {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <Carousel.Item className="item">
                    <img
                      className="d-center w-50 "
                      src={slide2}
                      alt="First slide"
                    />

                    <Carousel.Caption className="text">
                      <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="item">
                    <img
                      className="d-center w-50"
                      src={login}
                      alt="Second slide"
                    />

                    <Carousel.Caption className="text">
                      <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="item">
                    <img
                      className="d-center w-50"
                      src={login}
                      alt="Third slide"
                    />

                    <Carousel.Caption className="text">
                      <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
