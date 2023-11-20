import { useParams } from "react-router-dom";

import SidebarTemplate from "../../templates/SidebarTemplate";
import Playlist from "../../playlist/Playlist";
import Button from "../../button/button";
import MusicTrack from "../../musicTrack/MusicTrack";
import UserInfo from "../../userInfo/UserInfo";

import SoundFlowService from "../../../services/soundFlowService/base";

import slava from "../../../resources/img/slava.png"

import "./userAudioPage.scss"
import { useState } from "react";




const UserAudioPage = () => {

    const {userId} = useParams()



    return (
        <SidebarTemplate>
            <div className="user-audio">
                
                <UserInfo userId={userId}/>

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
