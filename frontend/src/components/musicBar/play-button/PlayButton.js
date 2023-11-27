import { useContext } from "react";
import MusicContext from "../../../context/MusicContext";

import "./play-button.scss"


const PlayButton = () => {

    const {isPlaying, setIsPlaying, musicBarRef} = useContext(MusicContext);

    const onClick = () => {
        if (!isPlaying) {
            musicBarRef.current.audioEl.current.play()
        } else {
            musicBarRef.current.audioEl.current.pause()
        }
        setIsPlaying(!isPlaying)
    }
    
    const Pause = () => {
        return (
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/><path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/></g></svg>
        )
    }

    const Play = () => {
       return (
            <svg  fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333
                            c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667
                            C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"/>
                    </g>
                </g>
            </svg>
       )
    }

    return (
        <button className="play-btn" onClick={onClick}>
            {isPlaying ? <Pause/> : <Play/> }
        </button>
    )
}

export default PlayButton;