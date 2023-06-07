import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Social App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse
          id="navbarNavDropdown"
          className="justify-content-center"
        >
          <Nav className="nav-pills">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/profile">
                <i className="bi bi-person-circle text-white me-1"></i> Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/message">
                <i className="bi bi-chat-dots-fill text-white me-1"></i>
                Messages
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
