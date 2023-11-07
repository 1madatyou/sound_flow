import SidebarTemplate from "../../templates/SidebarTemplate";


import slava from "../../../resources/img/slava.png"
import Playlist from "../../playlist/Playlist";
import MusicTrack from "../../musicTrack/MusicTrack";

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

                <div className="user-audio__user-playlists">
                
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

                <div className="user-audio__user-tracks">
                    
                    <span>Tracks</span>
                    
                    <div className="tracks">
                        <MusicTrack name="biggie" author="choppa"/>
                        <MusicTrack name="biggie" author="choppa"/>
                        <MusicTrack name="biggie" author="choppa"/>
                        <MusicTrack name="biggie" author="choppa"/>
                        <MusicTrack name="biggie" author="choppa"/>
                    </div>
                    

                </div>

            </div>
        </SidebarTemplate>
    );
}

export default UserAudioPage;
