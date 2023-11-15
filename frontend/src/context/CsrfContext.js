import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";
import axios from 'axios';


const CSRFContext = createContext()

const CSRFProvider = ({children}) => {

    const [CSRFToken, setCSRFToken] = useState(null);

    useEffect(() =>
        {
            const getCSRFToken = async () => {
                axios.get(API_BASE_URL + '/api/v1/csrf_token',
                    { withCredentials: true }
                    )
                    .then(response => {
                        console.log('Token from server:' + response.data.token)
                        setCSRFToken(response.data.token)
                    })
            }

            console.log("Token before request:" + CSRFToken)
            getCSRFToken()
        },
        []
    )
    

    let contextData = {
        CSRFToken: CSRFToken
    }

    return (
        <CSRFContext.Provider value={contextData}>
            {children}
        </CSRFContext.Provider>
    )
}

export default CSRFContext;
export { CSRFProvider };