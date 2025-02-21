import { Container, Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="offset-1">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls d-flex justify-content-between">
              <Button variant="link" className="p-0">
                <Image src={shuffleIcon} alt="shuffle" width="14" height="14" style={{ opacity: 0.6 }} />
              </Button>
              <Button variant="link" className="p-0">
                <Image src={prevIcon} alt="prev" width="14" height="14" style={{ opacity: 0.6 }} />
              </Button>
              <Button variant="link" className="p-0">
                <Image src={playIcon} alt="play" width="14" height="14" style={{ opacity: 0.6 }} />
              </Button>
              <Button variant="link" className="p-0">
                <Image src={nextIcon} alt="next" width="14" height="14" style={{ opacity: 0.6 }} />
              </Button>
              <Button variant="link" className="p-0">
                <Image src={repeatIcon} alt="repeat" width="14" height="14" style={{ opacity: 0.6 }} />
              </Button>
            </Col>
            <Col xs={8} md={6} className="mt-3">
              <ProgressBar className="progress" variant="secondary" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
