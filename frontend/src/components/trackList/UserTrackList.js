import { useEffect, useState } from "react";
import MusicTrack from "../musicTrack/MusicTrack"

import "./userTrackList.scss"
import useSoundFlowService from "../../services/soundFlowService/base";


const UserTrackList = ({userId}) => {

    const [userTracks, setUserTracks] = useState([]);
    const {getUserTracks} = useSoundFlowService()
    console.log(userTracks)
    useEffect(() => {
        getUserTracks(userId)
            .then((result) => setUserTracks(result)) 
    }, [userId])

    return (
        <View tracks={userTracks}/>
    )
}


const View = ({tracks}) => {

    const trackList = tracks.map(track => {
        return (
            <MusicTrack name={track.name} author={track.author} image={track.image}/>
        )
    })

    return (
        <div className="track-list">
                    
            <span>Tracks</span>
            
            <div className="tracks">
                {trackList}
            </div>
                    
        </div>
    );

}

export default UserTrackList;