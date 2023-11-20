import { API_BASE_URL } from "../../constants"

class SoundFlowService {

    static _transformUser = async (data) => {
        
        const {username, following, statistic} = data
    
        const result = {
            username: username,
            following: following,
            countOfTracks: statistic.count_of_tracks,
            countOfStreams: statistic.count_of_streams,
            countOfPlaylists: statistic.count_of_playlists
        }

        return result
    }

    static getUser = async (userId) => {

        const response = await fetch(
            API_BASE_URL + `/users/${userId}`,
            {
                method: "GET",
                headers: {'Content-Type': 'application/json'},
                body: null
            }
        )

        if (response.status === 200) {
            let data = await response.json()
            return SoundFlowService._transformUser(data)            
        } 
    }


}

export default SoundFlowService;