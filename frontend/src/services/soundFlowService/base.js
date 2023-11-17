import { API_BASE_URL } from "../../constants"

class SoundFlowService {

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
            return data            
        } 
    }


}

export default SoundFlowService;