import React from "react";

const LibrarySong = ({ song,setCurrentSong,audioRef, isPlaying,songs,id, setSongs}) => {
  const selectSongHandler = () =>{
    setCurrentSong(song);
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
          playPromise.then((audio) => {
            audioRef.current.play();
          });
      }
    }
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
