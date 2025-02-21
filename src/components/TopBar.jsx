import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <Row className="py-3">
      <Col md={9} lg={11} className="mainLinks d-none d-md-flex offset-1">
        <nav className="w-100 d-flex justify-content-between">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active text-light fw-bold" : "text-light")}>
            TRENDING
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active text-light fw-bold" : "text-light")}>
            PODCAST
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active text-light fw-bold" : "text-light")}>
            MOODS AND GENRES
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active text-light fw-bold" : "text-light")}>
            NEW RELEASES
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active text-light fw-bold" : "text-light")}>
            DISCOVER
          </NavLink>
        </nav>
      </Col>
    </Row>
  );
};

export default TopBar;
