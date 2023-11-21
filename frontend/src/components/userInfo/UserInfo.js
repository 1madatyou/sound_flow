import { useState, useEffect, useContext } from 'react'

import { AuthContext } from '../../context'

import Button from '../button/button'
import FollowButton from '../followButton/followButton'

import useSoundFlowService from '../../services/soundFlowService/base'

import defaultUserImage from '../../resources/img/user-image.png'

import './userInfo.scss'


const UserInfo = ({userId}) => {

    const {currentUserId} = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState({})

    const {getUser} = useSoundFlowService();

    useEffect(() => {
        getUser(userId)
            .then(data => {
                setUserInfo(data)
            })
        }, [userId]
    )
    

    return (
        <View userInfo={userInfo} setUserInfo={setUserInfo} currentUserId={currentUserId}/>
    );
    
}

const View = ({userInfo, setUserInfo, currentUserId}) => {

    const {id, username, countOfFollowers, countOfStreams, image} = userInfo
    
    return (
        <div className="user-info">
                
            <div className="user-info__main">
                <img className='user-info__img'
                     src={image ? image :  defaultUserImage}/>

                {id === currentUserId ? 
                    <Button>
                        Edit
                    </Button>
                    :
                    <FollowButton userInfo={userInfo} setUserInfo={setUserInfo} currentUserId={currentUserId}/>
                }
                

            </div>

            <div className="user-info__text">
                <span>{username}</span>
                <span>{countOfFollowers} followers,
                <br/> {countOfStreams} streams </span>
            </div>
    
        </div>
    )
}

export default UserInfo;