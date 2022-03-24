import Player from './components/Player';
import Song from './components/Song';
import './styles/style.scss'
import data from './data'
import { useState } from 'react';
import Library from './components/Library'


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
     <Library songs = {songs}/>
    </div>
  );
}

export default App;
