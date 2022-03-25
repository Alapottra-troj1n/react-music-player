import {React} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef, setSongInfo, songInfo, isPlaying , setIsPlaying,songs,currentSong, setCurrentSong}) => {
  


  const playSongHandler= () => {
    
    
    
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }else{
      audioRef.current.play();
      setIsPlaying(true);
    }

 

  }
  


  const formatTime = (time) =>{
    return(
      Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
    )
  }



  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const trackHandler = (direction) => {
    console.log(songs.length)
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
    if(direction === 'skip-forward'){
      let currentSongForward = currentSongIndex + 1;
      if(currentSongForward === songs.length){
        currentSongForward = 0;
      }
      setCurrentSong(songs[currentSongForward])

    }

    if(direction === 'skip-back'){
      console.log(songs.length)
      let currentSongBack = currentSongIndex - 1;
      console.log(currentSongBack);
      if(currentSongBack === -1){
        currentSongBack = songs.length - 1;
      }
      setCurrentSong(songs[currentSongBack])

    }
  }
  

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input min={0} onChange={dragHandler} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" name="" id="" />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" onClick={()=> trackHandler('skip-back')} icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward" onClick={()=> trackHandler('skip-forward')} size="2x"icon={faAngleRight}/>
      </div>
      
    </div>
  );
};

export default Player;
