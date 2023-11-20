import { useState } from "react"
import Playlist from "../playlist/Playlist"

import "./userPlaylistList.scss"

const UserPlaylistList = ({userId}) => {

    const {userPlaylistList, setUserPlaylistList} = useState([]);

    return (
        <View playlistList={userPlaylistList}/>
    )

}

const View = ({playlistList}) => {

    return (
        <div className="playlist-list">
                
            <span>Playlists</span>

            <div className="playlists">
                <Playlist name="Bigbig" creator="NLE Choppa" />
                <Playlist name="Bigbig" creator="NLE Choppa" />
                <Playlist name="Bigbig" creator="NLE Choppa" />
                <Playlist name="Bigbig" creator="NLE Choppa" />
                <Playlist name="Bigbig" creator="NLE Choppa" />
            </div>

            <a className="a">Show more</a>

        </div>
    )

}

export default UserPlaylistList;