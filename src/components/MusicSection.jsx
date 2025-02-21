import { Container } from "react-bootstrap";
import MusicCategory from "./MusicCategory";

const MusicSection = () => {
  return (
    <Container>
      <MusicCategory  artist="queen" />
      <MusicCategory  artist="katyperry" />
      <MusicCategory  artist="eminem" />
    </Container>
  );
};

export default MusicSection;
