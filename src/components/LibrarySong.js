import React from "react";
import { playAudio } from "../utiility";

const LibrarySong = ({ song,setCurrentSong,audioRef, isPlaying,songs,id, setSongs}) => {
  const selectSongHandler = () =>{
    setCurrentSong(song);
    
    playAudio(isPlaying, audioRef);
    const newSongs = songs.map(song=>{
      if(song.id === id){
        return{
          ...song, active: true,
        }
      }else{
        return{
          ...song, active: false,
        }
      }
    });
    setSongs(newSongs);
    

  }


  return (
    <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img src={song.cover} alt="" />
      <div className="song-des">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
