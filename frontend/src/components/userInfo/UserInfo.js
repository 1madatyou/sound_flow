import { useState, useEffect } from 'react'

import Button from '../button/button'

import SoundFlowService from '../../services/soundFlowService/base'

import './userInfo.scss';


const UserInfo = ({userId}) => {

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        SoundFlowService.getUser(userId)
            .then(data => {
                setUserInfo(data)
            })
        }, [userId]
    )
    
    console.log(userInfo)

    return (
        <View data={userInfo}/>
    );


}

const View = ({data}) => {

    const {username, countOfPlaylists, countOfStreams, countOfTracks} = data

    return (
        <div className="user-info">
                
            <div className="user-info__main">
                <img alt='234'/>
                <Button>
                    Follow
                </Button>
            </div>

            <div className="user-info__text">
                <span>{username}</span>
                <span>{countOfTracks} tracks,
                <br/> {countOfPlaylists} playlists,
                <br/> {countOfStreams} streams </span>
            </div>
    
        </div>
    )
}

export default UserInfo;