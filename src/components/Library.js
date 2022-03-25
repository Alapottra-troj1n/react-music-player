import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong,audioRef, isPlaying , setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'library-active' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} song={song} />)}
            </div>
        </div>
    );
};

export default Library;