import "../.././Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../.././components/navbar/NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Rejoindre from ".././Rejoindre/Rejoindre";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Rejoindre />
      <Banner />
      <Skills data-aos="fade-up" />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
