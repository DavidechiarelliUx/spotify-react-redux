import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import MusicCard from "./MusicCard";

const MusicCategory = ({ artist }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Errore nella fetch");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };
    fetchSongs();
  }, [artist]);

  return (
    <Container className="mt-5">
      <h2 className="text-light">{artist}</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3">
        {songs.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </Row>
    </Container>
  );
};

export default MusicCategory;
