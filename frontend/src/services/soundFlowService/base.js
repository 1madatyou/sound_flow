import { API_BASE_URL } from "../../constants"

class SoundFlowService {

    static _transformUser = async (data) => {
        
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