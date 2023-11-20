import { useContext } from "react"
import { AuthContext } from '../context'

import { API_BASE_URL } from "../constants"


const useHttp = () => {
    const requestHeaders = {
        'Content-Type': 'application/json',
    }

    const {authTokens} = useContext(AuthContext)
    const accessToken = authTokens.access ?? null

    if (accessToken) {
        requestHeaders['Authorization'] = `Bearer ${accessToken}`
    }

    const sendGet = async (route) => {

        const response = await fetch(
            API_BASE_URL + route,
            {
                method: "GET",
                headers: requestHeaders,
                body: null,
                credentials: 'include'
            },
        )

        return response
    }

    return {
        sendGet
    }
}

export default useHttp;