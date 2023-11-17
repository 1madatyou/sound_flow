import {useContext, useEffect, useState} from "react";

import Form from "./base/form"
import InputComponent from "../input/input";
import { AuthContext, ModalContext } from "../../context/";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
    
    const navigate = useNavigate();
    const {switchModalActive} = useContext(ModalContext);


    const { loginUser, loginErrors, user } = useContext(AuthContext)
    const [ formData, setFormData ] = useState({});

    const header = 'Sign in to SoundFlow'
    const formLinks = [
        {'form': 'RegForm', 'text': 'Sign up'},
        {'form': 'RestoreAccessForm', 'text': 'Restore Access'},
    ]
    
    const onInputChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event) => {
        await loginUser(event)
        switchModalActive()
        // console.log("Trying to navigate with...")
        // console.log(user)

    }

    const inputList = [
        <InputComponent
            headerName="email"
            nameAttribute="email"
            typeAttribute="email"
            value={formData.email}/>,
        <InputComponent
            headerName="password"
            nameAttribute="password"
            typeAttribute="password"
            value={formData.password}/>  
    ]

    return (
        <Form header={header}
              inputList={inputList} 
              submitButtonText="Sign in"
              formLinks={formLinks}
              
              onSubmit={handleSubmit}
              onInputChange={onInputChange}
              formErrors={loginErrors}></Form>
    )

}

export default AuthForm;