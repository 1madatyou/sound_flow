import { useState } from "react";
import MusicTrack from "../musicTrack/MusicTrack"

import "./userTrackList.scss"


const UserTrackList = () => {

    const {userTrackList, setUserTrackList} = useState([]);

    return (
        <View trackList={userTrackList}/>
    )
}


const View = ({trackList}) => {

    return (
        <div className="track-list">
                    
            <span>Tracks</span>
            
            <div className="tracks">
                <MusicTrack name="biggie" author="choppa"/>
                <MusicTrack name="biggie" author="choppa"/>
                <MusicTrack name="biggie" author="choppa"/>
                <MusicTrack name="biggie" author="choppa"/>
                <MusicTrack name="biggie" author="choppa"/>
            </div>
                    
        </div>
    );

}

export default UserTrackList;