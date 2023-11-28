import { createContext, useEffect, useRef, useState } from "react";

import MusicBar from "../components/musicBar/MusicBar";


const MusicContext = createContext();

const MusicProvider = ({children}) => {

    const musicBarRef = useRef(null); 

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const [volume, setVolume] = useState(0.3);
    const [isMuted, setIsMuted] = useState(false);

    const pauseTrack = () => {
        musicBarRef.current.audioEl.current.pause()
        setIsPlaying(false)
    }

    const playTrack = () => {
        musicBarRef.current.audioEl.current.play()
        setIsPlaying(true)
    }

    // For muting a volume
    useEffect(() => {
        if (musicBarRef.current) {
            musicBarRef.current.audioEl.current.volume = 0
            if (!isMuted) {
                musicBarRef.current.audioEl.current.volume = volume
            }
        }
    }, [isMuted])

    // For track switch
    useEffect(() => {
        if (musicBarRef.current) {
            musicBarRef.current.audioEl.current.volume = volume
            playTrack()
        }
    }, [currentTrack])

    // For pass volume state into volume attr of audio tag while track or volume change
    useEffect(() => {
        if (musicBarRef.current) {
            musicBarRef.current.audioEl.current.volume = volume
        }
      }, [musicBarRef.current, volume])

    let contextData = {
        currentTrack,
        setCurrentTrack,

        volume,
        setVolume,

        isMuted,
        setIsMuted,

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