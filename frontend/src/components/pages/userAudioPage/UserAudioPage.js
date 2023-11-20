import { useParams } from "react-router-dom";

import SidebarTemplate from "../../templates/SidebarTemplate";
import MusicTrack from "../../musicTrack/MusicTrack";
import UserInfo from "../../userInfo/UserInfo";
import UserPlaylistList from "../../playlistList/UserPlaylistList";

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

                <UserPlaylistList userId={userId}/>

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
