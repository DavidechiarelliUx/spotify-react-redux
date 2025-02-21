import { Card, Col } from "react-bootstrap";

const MusicCard = ({ song }) => {
  return (
    <Col className="text-center">
      <Card className="bg-transparent border-0">
        <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} className="img-fluid" />
        <Card.Body className="p-1">
          <Card.Title className="fs-6 fw-bold text-light">track : {song.title}</Card.Title>
          <Card.Text className="fs-6 fw-bold text-light">author : {song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MusicCard;
