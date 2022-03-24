import {React, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying , setIsPlaying}) => {
  const audioRef = useRef(null);


  const playSongHandler= () => {
    
    
    
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }else{
      audioRef.current.play();
      setIsPlaying(true);
    }

 

  }
  
  const [songInfo ,setSongInfo] = useState({
    duration: null,
    currentTime : null
  });

  const formatTime = (time) =>{
    return(
      Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
    )
  }

  const songTimeHandler = (e) => {
    console.log(e.target.currentTime);
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo, duration, currentTime
    })
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }
  

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input min={0} onChange={dragHandler} max={songInfo.duration} value={songInfo.currentTime} type="range" name="" id="" />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" onClick={playSongHandler} icon={faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward"size="2x"icon={faAngleRight}/>
      </div>
      <audio ref={audioRef} onLoadedMetadata={songTimeHandler} onTimeUpdate={songTimeHandler} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
