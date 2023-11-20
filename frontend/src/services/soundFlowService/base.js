import useHttp from '../../hooks/http.hook'


const useSoundFlowService = () => {

    const {sendGet} = useHttp();

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

        const response = await sendGet(`/users/${userId}`)

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