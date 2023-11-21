import Button from "../button/button";

import useHttp from "../../hooks/http.hook";
import useSoundFlowService from "../../services/soundFlowService/base";


const FollowButton = ({userInfo, setUserInfo, currentUserId}) => {

    const {followUser, unfollowUser} = useSoundFlowService();
    const followingStatus = userInfo.following

    const onClick = async () => {
        if (!followingStatus) {
            followUser(userInfo.id).then(setUserInfo)
        } else {
            unfollowUser(userInfo.id).then(setUserInfo)
        }
    }

    return (
        userInfo.following ?
        <Button onClick={onClick}>
            Unfollow
        </Button> 
        :
        <Button onClick={onClick}>
            Follow
        </Button>
    )
}

export default FollowButton;