import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown"; Might use for porfolio
import { Link } from "react-router-dom";

function NavBar({ onToggleTheme, theme }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/icon.webp"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Brayden Pierce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          {/* The login button - right aligned */}
          <Nav className="gap-2">
            <Button
              variant="outline-secondary"
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </Button>
            <Button as={Link} to="/login" variant="outline-secondary">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
