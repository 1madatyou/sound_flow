import SidebarTemplate from "../../templates/SidebarTemplate";

import slava from "../../../resources/img/slava.png"

import "./userAudioPage.scss"


const UserAudioPage = () => {

    const username = "SlavchikWB"
    const countOfTracks = 230
    const countOfPlaylists = 11

    return (
        <SidebarTemplate>
            <div className="user-audio__content">
                
                <div className="user-audio__user-info">
                
                    <img src={slava}/>
                    <div className="user-audio__user-info-text-block">
                        <span>{username}</span>
                        <span>{countOfTracks} tracks,<br/> {countOfPlaylists} playlists </span>
                    </div>
                    

                </div>

            </div>
        </SidebarTemplate>
    );
}

export default UserAudioPage;
