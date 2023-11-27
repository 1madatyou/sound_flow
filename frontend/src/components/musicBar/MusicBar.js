import { useContext, useState } from "react";
import MusicContext from "../../context/MusicContext";

import nle from "../../resources/img/nle.jpg"

import ReactAudioPlayer from 'react-audio-player';

import PlayButton from "./play-button/PlayButton";
import VolumeButton from "./volume-button/VolumeButton";
import PreviousTrackButton from "./previous-track-button/PreviousTrackButton";
import NextTrackButton from "./next-track-button/NextTrackButton";

import track from "../../resources/choppa.mp3"
import "./musicBar.scss"


const MusicBar = () => {

    const {musicBarRef} = useContext(MusicContext);
    const {isOpened, setIsOpened} = useState(false);

    return (
        <div className="wrapper">
            <div className="music-bar">
                <ReactAudioPlayer
                    src={track}
                    controls
                    ref={musicBarRef}

                />
                <img className="track-image track-image--small" src={nle} />
                <PlayButton/>
                <VolumeButton/>
            </div>
        </div>
    );
}

export default MusicBar;







