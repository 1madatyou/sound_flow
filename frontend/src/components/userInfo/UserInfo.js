import { useState, useEffect, useContext } from 'react'

import { AuthContext } from '../../context'

import Button from '../button/button'

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
        <View data={userInfo} currentUserId={currentUserId}/>
    );
    
}

const View = ({data, currentUserId}) => {

    const {id, username, countOfFollowers, countOfStreams, image} = data

    return (
        <div className="user-info">
                
            <div className="user-info__main">
                <img className='user-info__img'
                     src={image ? image :  defaultUserImage }/>

                {id === currentUserId ? 
                    <Button>
                        Edit
                    </Button>
                    :
                    <Button>
                        Follow
                    </Button>
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