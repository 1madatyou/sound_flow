import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import {jwtDecode} from "jwt-decode";

import { API_BASE_URL } from "../constants";


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();


    let [user, setUser] = useState(() => (
        localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
    ))
    let [authTokens, setAuthTokens] = useState(() => {
        return localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    })

    let [loginErrors, setLoginErrors] = useState([]);


    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch(API_BASE_URL + '/token/',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: e.target.email.value,
                        password: e.target.password.value
                    }
                )
            }
        )
        
        let data = await response.json()
        if (response.status === 200) {
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            const accessTokenDataDecoded = jwtDecode(data.access) 
            console.log('Setting user data...')
            setUser(accessTokenDataDecoded)
            navigate(`/users/${accessTokenDataDecoded.user_id}`)
        } else {
            console.log(data)
            setLoginErrors(Object.entries(data))
        }


    }

    let logoutUser = (e) => {
        if (e) {
            e.preventDefault()
        }
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
        navigate('/home')
    }

    const updateToken = async () => {

        const response = await fetch('http://127.0.0.1:8000/api/v1/token/refresh', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({refresh:authTokens?.refresh})
        })

        const data = await response.json()
        console.log(data)


        if (response.status === 200) {
            const newAuthTokens ={...authTokens, access: data.access}
            setAuthTokens(newAuthTokens)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(newAuthTokens))

        } else {
            logoutUser()
        }
    

    }

    useEffect(() => {
        if(authTokens){
            updateToken().then(() => console.log('Update token from mount'))
        }
    }, [])

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 4

        let interval = setInterval(() => {
            if(authTokens){
                updateToken().then(() => console.log('Update token'))
                
            }
        }, REFRESH_INTERVAL)

        return () => {
            clearInterval(interval)
        }

    }, [authTokens])

    let contextData = {
        currentUserId: user && user.user_id,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        loginErrors: loginErrors,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}