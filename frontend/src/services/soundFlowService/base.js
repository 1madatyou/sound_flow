import { useContext } from "react"

import { AuthContext } from "../../context"

import { API_BASE_URL } from "../../constants"

const useSoundFlowService = () => {

    const {authTokens} = useContext(AuthContext)

    const _send_get = async (route) => {


        const response = await fetch(
            API_BASE_URL + route,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`
                },
                body: null
            }
        )

        return response
    }

    const _transformUser = (data) => {
        
        const {id, username, following, statistic, image} = data
        const result = {
            id: id,
            username: username,
            following: following,
            countOfTracks: statistic.count_of_tracks,
            countOfStreams: statistic.count_of_streams,
            countOfPlaylists: statistic.count_of_playlists,
            countOfFollowers: statistic.count_of_followers,
            image: image && image.image
        }

        return result
    }

    const getUser = async (userId) => {

        const response = await _send_get(`/users/${userId}`)

        if (response.status === 200) {
            let data = await response.json()
            return _transformUser(data)            
        } 
    }

    let context = {
        getUser,
    }
    
    return context;
}


export default useSoundFlowService;