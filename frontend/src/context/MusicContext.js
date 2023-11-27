import { createContext, useEffect, useRef, useState } from "react";

import MusicBar from "../components/musicBar/MusicBar";


const MusicContext = createContext();

const MusicProvider = ({children}) => {

    const musicBarRef = useRef(null); 

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [volume, setVolume] = useState(0.5);

    const pauseTrack = () => {
        musicBarRef.current.audioEl.current.pause()
        setIsPlaying(false)
    }

    const playTrack = () => {
        musicBarRef.current.audioEl.current.play()
        setIsPlaying(true)
    }

    useEffect(() => {
        if (musicBarRef.current) {
            musicBarRef.current.audioEl.current.volume = volume
            playTrack()
        }
    }, [currentTrack])

    useEffect(() => {
        if (!!musicBarRef.current) {
            musicBarRef.current.audioEl.current.volume = volume
        }
      }, [musicBarRef, volume])

    let contextData = {
        currentTrack,
        setCurrentTrack,


        volume,
        setVolume,

        isPlaying,
        setIsPlaying,
        
        musicBarRef,

        playTrack,
        pauseTrack
    }

    return (
        <MusicContext.Provider value={contextData} >
            {children}

            {currentTrack && <MusicBar/>}
        </MusicContext.Provider>
    )

}

export default MusicContext;
export { MusicProvider };