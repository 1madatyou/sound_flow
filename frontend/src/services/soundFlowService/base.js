import useHttp from '../../hooks/http.hook'


const useSoundFlowService = () => {

    const {sendGet, sendDelete, sendPost} = useHttp();

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

    const _transformTrack = (data) => {
        const {id, name, author, file, image} = data
        return {
            id,
            name,
            author,
            file,
            image
        }
    }

    const getUser = async (userId) => {

        const response = await sendGet(`/users/${userId}`)

        if (response.status === 200) {
            let data = await response.json()
            return _transformUser(data)            
        } 
    }

    const getUserTracks = async (userId) => {

        const response = await sendGet(`/users/${userId}/tracks`)

        if (response.status === 200) {
            let data = await response.json()
            return data.map(item => _transformTrack(item))         
        }

    }

    const followUser = async(userId) => {
        const response = await sendPost(`/users/${userId}/follow`)
        
        if (response.status === 200) {
            let data = await response.json()
            return _transformUser(data)
        } 

    }
    
    const unfollowUser = async(userId) => {
        const response = await sendDelete(`/users/${userId}/follow`)

        if (response.status === 200) {
            let data = await response.json()
            return _transformUser(data)
        } 
    }

    let context = {
        getUser,
        getUserTracks,

        followUser,
        unfollowUser

    }
    
    return context;
}


export default useSoundFlowService;