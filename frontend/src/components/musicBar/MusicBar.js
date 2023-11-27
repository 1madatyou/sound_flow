import { useContext, useState } from "react";
import MusicContext from "../../context/MusicContext";

import nle from "../../resources/img/nle.jpg"

import ReactAudioPlayer from 'react-audio-player';

import PlayButton from "./play-button/PlayButton";
import VolumeButton from "./volume-button/VolumeButton";
import PreviousTrackButton from "./previous-track-button/PreviousTrackButton";
import NextTrackButton from "./next-track-button/NextTrackButton";

import "./musicBar.scss"


const MusicBar = () => {

    const {musicBarRef, currentTrack} = useContext(MusicContext);
    const {isOpened, setIsOpened} = useState(false);

    return (
        <div className="wrapper">
            <div className="music-bar">
                <ReactAudioPlayer
                    src={currentTrack.file}
                    controls
                    ref={musicBarRef}

                />
                <img className="track-image track-image--small" src={currentTrack.image} />
                <PlayButton/>
                <VolumeButton/>
            </div>
        </div>
    );
}

export default MusicBar;







