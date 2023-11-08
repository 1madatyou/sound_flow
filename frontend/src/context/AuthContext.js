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
        const response = await fetch(API_BASE_URL + '/api/v1/token/',
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
            setUser(jwtDecode(data.access))
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

        console.log("Состояние токенов:")
        console.log(authTokens)

        console.log(`Отправляем refresh ${JSON.stringify( {refresh: authTokens?.refresh} )}`)
        const response = await fetch('http://127.0.0.1:8000/api/v1/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({refresh:authTokens?.refresh})
        })

        const data = await response.json()

        console.log(`Получили ответ со статусом ${response.status} и данными`)
        console.log(data)

        if (response.status === 200) {
            setAuthTokens({...authTokens, access: data.access})
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

            console.log(`Обновили токены:`)
            console.log(authTokens)
        } else {
            logoutUser()
        }
    

    }

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 4
        // const REFRESH_INTERVAL = 1000 * 5

        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)

        return () => {
            console.log(3)
            clearInterval(interval)
        }

    }, [authTokens])

    let contextData = {
        user: user,
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