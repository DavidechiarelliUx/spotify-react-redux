import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import MusicCategory from "./MusicCategory";
import MusicCard from "./MusicCard";

const MusicSection = () => {
  const songsState = useSelector((state) => state.songs); 
  console.log( songsState);


  return (
    <Container>
      {songsState.searchedSongs.length > 0 && (
        <>
          <h2 className="text-light">Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3">
            {songsState.searchedSongs.map((song) => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
        </>
      )}
      <MusicCategory artist="queen" />
      <MusicCategory artist="katyperry" />
      <MusicCategory artist="eminem" />
    </Container>
  );
};

export default MusicSection;
