import { Navbar, Nav, Image, Button, Col, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Col md={2} className="p-0">
      <Navbar expand="md" className="fixed-left flex-column align-items-start vh-100 p-3 " id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} alt="Spotify Logo" width={131} height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="sidebar-menu" />
          <Navbar.Collapse id="sidebar-menu">
            <Nav className="flex-column w-100">
              <Nav.Link as={Link} to="/" className="d-flex align-items-center text-light">
                <HouseDoorFill size={20} className="me-2" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="d-flex align-items-center text-light">
                <BookFill size={20} className="me-2" /> Your Library
              </Nav.Link>
              <Form className="mt-3 w-100">
                <Form.Control type="text" placeholder="Search" className="mb-2" />
                <Button variant="outline-secondary" size="sm" className="w-100">
                  GO
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Col className="mt-5 w-100 text-center">
          <Button className="signup-btn w-100 mb-2">Sign Up</Button>
          <Button className="login-btn w-100 mb-2">Login</Button>
          <Col>
            <Link to="/" className="text-secondary">Cookie Policy </Link>
            <Link to="/" className="text-secondary">Privacy</Link>
          </Col>
        </Col>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
