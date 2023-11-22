import { createContext, useState } from "react";

import MusicBar from "../components/musicBar/MusicBar";


const MusicContext = createContext();

const MusicProvider = ({children}) => {

    const {isPlaying, setIsPlaying} = useState(false);
    const {currentTrack, setCurrentTrack} = useState();
    const {volume, setVolume} = useState(50);

    let contextData = {
        currentTrack,
        volume,
        isPlaying
    }

    return (
        <MusicContext.Provider value={contextData} >
            {children}
            <MusicBar></MusicBar>
        </MusicContext.Provider>
    )

}

export default MusicContext;
export { MusicProvider };