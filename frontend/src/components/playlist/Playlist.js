import "./playlist.scss"
import nle from "../../resources/img/nle.jpg"


const Playlist = ({name, creator, img}) => {

    return (
        <div className="playlist">
            
            <img src={nle} className="playlist__image" />

            <div className="playlist__content-wrapper">
                <span className="playlist__name">
                    {name}
                </span>

                <span className="playlist__creator">
                    {creator}
                </span>
            </div>

        </div>
    );
}

export default Playlist;