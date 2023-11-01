import { useNavigate } from "react-router-dom";
import { createContext, useState } from 'react';
import {jwtDecode} from "jwt-decode";


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();


    let [user, setUser] = useState(() => (
        localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
    ))
    let [authTokens, setAuthTokens] = useState(() => (
        localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    ))

    let loginUser = async (e) => {
        e.preventDefault()
        console.log(1)
        const response = await fetch('http://127.0.0.1:8000/api/v1/token/',
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
        console.log(data)

        if (response.status === 200) {
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
        } else {
            alert('Something went wrong while loggin in the user!')
        }


    }

    let logoutUser = (e) => {
        console.log(2)
        e.preventDefault()
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
        navigate('/home')
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}