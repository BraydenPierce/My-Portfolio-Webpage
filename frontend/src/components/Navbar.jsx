import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown"; Might use for porfolio
import { Link, useNavigate } from "react-router-dom";

function NavBar({ onToggleTheme, theme, isAuthenticated, onLogoutSuccess }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const res = await fetch("http://localhost:4000/users/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (data.status === "logout successful") {
        onLogoutSuccess?.();
        navigate("/");
      } else {
        window.alert("Logout failed");
      }
    } catch (error) {
      window.alert("Logout failed");
    }
  }

  return (
    <Navbar expand="lg" className="bg-secondary custom-navbar">
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
            <Nav.Link as={Link} to="/hobbies">
              Hobbies
            </Nav.Link>
          </Nav>
          {/* The login and theme buttons - right aligned */}
          <Nav className="gap-2">
            <button
              type="button"
              className={`theme-toggle ${theme === "dark" ? "is-dark" : "is-light"}`}
              onClick={onToggleTheme}
              role="switch"
              aria-checked={theme === "dark"}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" />
              </span>
              <span className="theme-toggle-text">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>
            {isAuthenticated ? (
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button as={Link} to="/login" variant="primary">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
