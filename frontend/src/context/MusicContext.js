import { createContext, useEffect, useRef, useState } from "react";

import MusicBar from "../components/musicBar/MusicBar";


const MusicContext = createContext();

const MusicProvider = ({children}) => {

    const musicBarRef = useRef(null); 

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [volume, setVolume] = useState(50);

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
            playTrack()
        }
    }, [currentTrack])

    let contextData = {
        currentTrack,
        setCurrentTrack,

        volume,

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