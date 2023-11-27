import { createContext, useRef, useState } from "react";

import MusicBar from "../components/musicBar/MusicBar";


const MusicContext = createContext();

const MusicProvider = ({children}) => {

    const musicBarRef = useRef(null); 

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState();
    const [volume, setVolume] = useState(50);

    let contextData = {
        currentTrack,
        volume,

        isPlaying,
        setIsPlaying,

        musicBarRef
    }

    return (
        <MusicContext.Provider value={contextData} >
            {children}
            <MusicBar ref={musicBarRef}></MusicBar>
        </MusicContext.Provider>
    )

}

export default MusicContext;
export { MusicProvider };