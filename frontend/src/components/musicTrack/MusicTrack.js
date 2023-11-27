import { useContext } from "react"
import MusicContext from "../../context/MusicContext"

import "./musicTrack.scss"


const MusicTrack = ({track}) => {

    const {name, image, author} = track

    const {currentTrack,
           setCurrentTrack,

           isPlaying,

           playTrack,
           pauseTrack
        } = useContext(MusicContext)

    const onClick = () => {
        if (currentTrack != track) {
            setCurrentTrack(track)
        } else {
            {isPlaying ? pauseTrack() : playTrack()}
        }

    }

    return (
        <div className="track" onClick={onClick}>
        
            <div className="track__content-wrapper">

                <img className="track-image" src={image}/>

                <div className="track__text-content-wrapper">
                    <span className="track__name">
                        {name}
                    </span>

                    <span className="track__author">
                        {author}
                    </span>
                </div>

            </div>

            <div className="track__add-icon"></div>
            
        </div>
    );
}

export default MusicTrack;