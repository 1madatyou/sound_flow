import { useParams } from "react-router-dom";

import SidebarTemplate from "../../templates/SidebarTemplate";
import UserInfo from "../../userInfo/UserInfo";
import UserPlaylistList from "../../playlistList/UserPlaylistList";
import UserTrackList from "../../trackList/UserTrackList";

import "./userAudioPage.scss"


const UserAudioPage = () => {

    const {userId} = useParams()



    return (
        <SidebarTemplate>
            <div className="user">
                
                <UserInfo userId={userId}/>

                <UserPlaylistList userId={userId}/>

                <UserTrackList userId={userId}/>

            </div>
        </SidebarTemplate>
    );
}

export default UserAudioPage;
