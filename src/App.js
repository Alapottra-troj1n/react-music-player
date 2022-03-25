import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/style.scss";
import data from "./data";
import { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [libraryStatus, setLibraryStatus] = useState(false);

  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
  });

  const songTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      duration,
      currentTime,
    });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
      setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        
      />
       

      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songs={songs}
      />
     
      <audio
        ref={audioRef}
        onLoadedMetadata={songTimeHandler}
        onTimeUpdate={songTimeHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
