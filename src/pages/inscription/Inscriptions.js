import "./Inscriptions.css";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./Questions";
import TrackVisibility from "react-on-screen";
import { NavLink } from "react-router-dom";

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;

  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  return (
    <>
      <div className="App" id="inscription">
        <Container className="h-100">
          <Row>
            <Col>
              <TrackVisibility>
                <Row className="m-5">
                  <Col className="align-self-center">
                    <MultiStepProgressBar step={index} />
                  </Col>
                </Row>
                <Row>
                  {submitted ? (
                    <Card>
                      <Card.Body>
                        <p>bravo, maintenant cliqué pour se connecter!</p>
                      </Card.Body>
                      <Card.Footer>
                        <NavLink className="nav-insc" exact to="/connexion">
                          <Button>connexion</Button>
                        </NavLink>
                      </Card.Footer>
                    </Card>
                  ) : (
                    <Card>
                      <Card.Body>
                        <MultiStepForm
                          list={questions}
                          step={index}
                          onPageUpdate={onPageAnswerUpdate}
                          pagesAnswers={pagesAnswers}
                        />
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-between">
                        <Button onClick={prevButton} disabled={index == 1}>
                          Previous
                        </Button>
                        <Button onClick={nextButton}>
                          {index == totalPagesCount ? "Submit" : "Next"}
                        </Button>
                      </Card.Footer>
                    </Card>
                  )}
                </Row>
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
