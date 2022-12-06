import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./NavIns.css";

export const NavIns = () => {
  return (
    <Navbar expand="md" className="navInsc">
      <Container>
        <Navbar.Brand href="/">
          <img src="./img/loggo.ico" alt="Logo" />
          <h3>Comeetium</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-insc" exact to="/">
              <span className="home">Home</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
