import "./musicTrack.scss"
import nle from "../../resources/img/nle.jpg"


const MusicTrack = ({name, author, img}) => {


    return (
        <div className="track">
        
            <div className="track__content-wrapper">

                <img className="track__image" src={nle}/>

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