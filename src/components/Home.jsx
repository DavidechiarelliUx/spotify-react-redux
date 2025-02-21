import MainSection from "./MainSection";
import Player from "./Player";
import Sidebar from "./Sidebar";
import {Container, Row, Col} from "react-bootstrap"
const Home = () => {
    return (
      <>
        <Container fluid>
          <Row className="vh-100">
            <Col md={1} className="p-0">
              <Sidebar></Sidebar>
            </Col>
            <Col md={11}>
              <MainSection></MainSection>
              <Player></Player>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Home;