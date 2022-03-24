import Player from './components/Player';
import Song from './components/Song';
import './styles/style.scss'
import data from './data'
import { useState,useRef } from 'react';
import Library from './components/Library'


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const [songInfo ,setSongInfo] = useState({
    duration: 0,
    currentTime : 0
  });

  const songTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo, duration, currentTime
    })
  }

  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />

     <Library isPlaying={isPlaying} setCurrentSong={setCurrentSong} audioRef={audioRef} songs = {songs}/>
     <audio ref={audioRef} onLoadedMetadata={songTimeHandler} onTimeUpdate={songTimeHandler} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
